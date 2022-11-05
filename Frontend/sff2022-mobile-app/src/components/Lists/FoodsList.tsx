import { Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { View, } from 'dripsy';
import FoodCard from '../Cards/FoodCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export default function FoodList({topPresales}:any) {
  
  


  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View sx={foodsList.container}>
      {
        topPresales.map((presale:any) => {
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