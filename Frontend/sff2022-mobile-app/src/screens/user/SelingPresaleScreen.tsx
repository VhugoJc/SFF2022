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

export default function SelingPresaleScreen() {
  const navigation = useNavigation(); //navigation between screens
  const route = useRoute<any>();      //extract params from route
  const{presale} = route.params;      //extract presale data
  const {authState} = useContext(AuthContext);
  const [sellerLogo, setsellerLogo] = useState<any>('');

  const [screenQR, setScreenQR] = useState(false); // var which control the screen info
  const [presaleDataSale, setpresaleDataSale] = useState<PresaleDataSale>({//data about the sale
    presaleId:presale._id.$oid,
    userId:authState.user?._uid,
    amount:0,
  });

  useEffect(()=>{
    const team = teamsdb.find(team=>team._id.$oid===presale.sellerId.$oid);
    setsellerLogo(team?.logo);
  },[])
  
  const setScreen=(amount:number)=>{
    setpresaleDataSale({...presaleDataSale,amount});
    setScreenQR(!screenQR);
  }
  
  
  return (
    <ScrollView bounces={false} sx={styles.basicBackgnd}>
      <View>
          <CircleBtn onPress={() => navigation.goBack()} name='close' />
      </View>
      {
        screenQR
        // ? <SuccessfulSaleScreen id={presale.sellerId}/>
        ?<QRScreen presaleDataSale={presaleDataSale} logo={sellerLogo}/>
        : <CheckOrderScreen  presale={presale} setScreen={setScreen}/>
      }
    </ScrollView>
  )
}