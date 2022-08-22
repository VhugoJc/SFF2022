import { StyleSheet } from 'react-native';
import React from 'react'
import FoodCard from '../Cards/FoodCard'
import { View } from 'dripsy';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function PaidList() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View sx={paidList.container}>
    <FoodCard onPress={()=>navigation.navigate("Mi Preventa")} paid title='HILO ROJO' price={80} img={require('../../../assets/img/food3.jpg')} />
    </View>
  )
}

const paidList = StyleSheet.create({
    container: {
      backgroundColor: '$background',
    //   minHeight: '100%',
      paddingHorizontal: '$3',
    //   paddingBottom: '$3'
    }
  });