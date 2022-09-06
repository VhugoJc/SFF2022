import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { View, } from 'dripsy';
import FoodCard from '../Cards/FoodCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import presalesdb from '../../db/presales.json';

export default function FoodList() {
  const presales = presalesdb;
  console.log(presales);
  
  
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View sx={foodsList.container}>
      {
        presales.map(presale=>{
          return(
            <FoodCard 
            key={presale._id.$oid} 
            title='FRANKIETORTA' 
            price={presale.cost} 
            img={{uri:presale.coverImg}} 
            onPress={()=>navigation.navigate("Mi Comida",{
              presaleData:presale
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