import { Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { View, } from 'dripsy';
import FoodCard from '../Cards/FoodCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import presalesdb from '../../db/presales.json';

export default function FoodList() {
  const presales = presalesdb;
  shuffleArray(presales);
  const topPresales = presales.slice(0, 10); //reduce to 10

  function shuffleArray(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View sx={foodsList.container}>
      {
        topPresales.map(presale => {
          return (
            <FoodCard
              key={presale._id.$oid}
              title={presale.name}
              price={presale.cost}
              img={{ uri: presale.coverImg }}
              onPress={() => navigation.navigate("Mi Comida", {
                presaleData: presale
              })} />
          );
        })
      }
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