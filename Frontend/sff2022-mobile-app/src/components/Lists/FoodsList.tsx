import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { View, } from 'dripsy';
import FoodCard from '../Cards/FoodCard';

export default function FoodList() {
  return (
    <View sx={foodsList.container}>
      <FoodCard title='FRANKIETORTA' price={49} img={require('../../../assets/img/food1.jpg')} />
      <FoodCard title='TORTAGHOR' price={59} img={require('../../../assets/img/food2.jpg')} />
      <FoodCard title='HILO ROJO' price={80} img={require('../../../assets/img/food3.jpg')} />
    </View>
  )
}

const foodsList = StyleSheet.create({
  container: {
    backgroundColor: '$background',
    minHeight: '90%',
    paddingHorizontal: '$3',
  }
});