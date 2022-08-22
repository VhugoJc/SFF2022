import { StyleSheet } from 'react-native';
import React from 'react';
import {View, Text, Image, ScrollView} from 'dripsy';
import { styles } from '../../theme/stylesheet';
import LargeBtn from '../../components/Button/LargeBtn';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function MoneyScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <ScrollView sx={moneyScreen.container} bounces={false}>
      <Image sx={Object.assign({},moneyScreen.img,styles.shadowProp)} source={require('../../../assets/img/sell_illustration.png')} />
      <View sx={moneyScreen.txtContainer as any}>
          <Text sx={styles.subtitle as object}>
            Ventas Totales
          </Text>
          <Text sx={styles.text}>
            $35,000.00
          </Text>
      </View>
      <View sx={moneyScreen.txtContainer as object}>
          <Text sx={styles.subtitle}>
            Ventas Hoy
          </Text>
          <Text sx={styles.text}>
            $5,000.00
          </Text>
      </View>
      <View sx={moneyScreen.txtContainer as object}>
          <Text sx={styles.subtitle}>
            Ventas Esta Semana
          </Text>
          <Text sx={styles.text}>
            $15,000.00
          </Text>
      </View>
      <View sx={moneyScreen.btnContainer}>
        <LargeBtn onPress={()=>navigation.navigate("Nueva Venta")} name={'Nueva Venta'}/>
      </View>
      <View sx={moneyScreen.btnContainer}>
        <LargeBtn onPress={()=>navigation.navigate("Ventas Anteriores")} light name={'Mis Ventas Anteriores'}/>
      </View>
    </ScrollView>
  )
}

const moneyScreen = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'$background'
    },
    img:{
      width:90,
      height:50,
      alignSelf:'center',
      marginVertical:'$3',
    },
    txtContainer:{
      paddingHorizontal:'$3',
      paddingVertical:'$1'
    },
    btnContainer:{
      alignItems:'center',
      marginTop:'$3',


    }
});