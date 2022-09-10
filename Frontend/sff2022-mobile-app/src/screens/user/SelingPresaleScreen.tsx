import { View, Text, ScrollView, A } from 'dripsy';
import React, { useState } from 'react'
import { styles } from '../../theme/stylesheet';
import CheckOrderScreen from './CheckOrderScreen';
import CircleBtn from '../../components/Button/CircleBtn';
import { useNavigation, useRoute } from '@react-navigation/native';
import QRScreen from './QRScreen';
import SuccessfulSaleScreen from './SuccessfulSaleScreen';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { PresaleDataSale } from '../../interfaces/UserInterfaces';

export default function SelingPresaleScreen() {
  const navigation = useNavigation(); //navigation between screens
  const route = useRoute<any>();      //extract params from route
  const{presale} = route.params;      //extract presale data
  const {authState} = useContext(AuthContext);

  const [screenQR, setScreenQR] = useState(false); // var which control the screen info
  const [presaleDataSale, setpresaleDataSale] = useState<PresaleDataSale>({//data about the sale
    presaleId:presale._id.$oid,
    userId:authState.user?._uid,
    amount:0,
  });

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
        ?<QRScreen presaleDataSale={presaleDataSale}/>
        : <CheckOrderScreen  presale={presale} setScreen={setScreen}/>
      }
    </ScrollView>
  )
}