import { View, Text, ScrollView } from 'dripsy';
import React, { useState } from 'react'
import { styles } from '../../theme/stylesheet';
import CheckOrderScreen from './CheckOrderScreen';
import CircleBtn from '../../components/Button/CircleBtn';
import { useNavigation } from '@react-navigation/native';
import QRScreen from './QRScreen';
import SuccessfulSaleScreen from './SuccessfulSaleScreen';

export default function SelingPresaleScreen() {
  const [screenQR, setScreenQR] = useState(false);
  const setScreen=()=>{
    setScreenQR(!screenQR);
  }
  const navigation = useNavigation();
  return (
    <ScrollView bounces={false} sx={styles.basicBackgnd}>
      <View>
          <CircleBtn onPress={() => navigation.goBack()} name='close' />
      </View>
      {
        screenQR
        ? <SuccessfulSaleScreen/>
        : <CheckOrderScreen  setScreen={setScreen}/>
      }
    </ScrollView>
  )
}