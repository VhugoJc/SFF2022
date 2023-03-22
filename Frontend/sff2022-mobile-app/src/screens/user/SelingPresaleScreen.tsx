import { View, Text, ScrollView, A } from 'dripsy';
import React, { useEffect, useState } from 'react'
import { styles } from '../../theme/stylesheet';
import CheckOrderScreen from './CheckOrderScreen';
import CircleBtn from '../../components/Button/CircleBtn';
import { useNavigation, useRoute } from '@react-navigation/native';
import QRScreen from './QRScreen';
import SuccessfulSaleScreen from './SuccessfulSaleScreen';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { PresaleDataSale } from '../../interfaces/UserInterfaces';
import teamsdb from '../../db/teams.json';
import { userAPI } from '../../api/UserApi';
import { Alert } from 'react-native';

export default function SelingPresaleScreen() {
  const navigation = useNavigation(); //navigation between screens
  const route = useRoute<any>();      //extract params from route
  const { presale } = route.params;      //extract presale data
  const { authState } = useContext(AuthContext);
  const [sellerLogo, setsellerLogo] = useState<any>('');

  const [screenQR, setScreenQR] = useState('check'); // var which control the screen info
  const [presaleDataSale, setpresaleDataSale] = useState<PresaleDataSale>({//data about the sale
    presaleId: presale._id,
    userId: authState.user?._uid,
    amount: 0,
  });

  useEffect(()=>{
    const getTeam = async()=>{
        const response = await userAPI.get('/team/'+presale.sellerId);
        if(response.data){
          setsellerLogo(response.data.logo);
        }else{
            Alert.alert('Error de conexión');
        }
    }
    getTeam();
},[]);

const setScreen = (amount: number, screen: string) => {
    if (amount) {
      setpresaleDataSale({ ...presaleDataSale, amount });
    }
    setScreenQR(screen);
  }


  return (
    <ScrollView bounces={false} sx={Object.assign({},styles.basicBackgnd,{flex:1})}>
      <View>
        <CircleBtn onPress={() => navigation.goBack()} name='close' />
      </View>
      {
        screenQR === 'success'
          ? <SuccessfulSaleScreen id={presale.sellerId} />
          : screenQR === 'QR'
            ? <QRScreen setScreen={setScreen} presaleDataSale={presaleDataSale} logo={sellerLogo} />
            : <CheckOrderScreen presale={presale} setScreen={setScreen} />
      }
    </ScrollView>
  )
}