import { Text, StyleSheet, Alert,ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, } from 'dripsy';
import FoodCard from '../Cards/FoodCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Presale } from '../../interfaces/PresaleInterface';
import { userAPI } from '../../api/UserApi';

interface Props{
  refreshing: boolean
}

export default function FoodList({refreshing}:Props) {
  // const presales = presalesdb;
  const [presales, setPresales] = useState<Presale[]>([]);

  useEffect(() => {
    
    const getPraseles = async () => {
      try {
        const response = await userAPI.get('/presale');
        if (response?.data) {
          setPresales(response.data);
        }

      } catch (err) {
        Alert.alert('Error inesperado', 'Verifica tu conexión a internet', [{
          text: 'Ok'
        }])

      }
    }
    if(!refreshing){
      getPraseles();
    }
  }, [refreshing])


  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View sx={foodsList.container}>
      {
        presales.map(presale => {
          return (
            <FoodCard
              key={presale._id}
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