import { Alert, StyleSheet, Text, ScrollView, RefreshControl } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react'
import FoodCard from '../Cards/FoodCard'
import { View } from 'dripsy';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { userAPI } from '../../api/UserApi';
import presalesdb from '../../db/presales.json';


export default function PaidList() {
  const [presale, setpresale] = useState<Array<any>>([]);
  const [reload, setreload] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    getApi();
    setTimeout(function () {
      setRefreshing(false);
    }, 2000);
  }

  const getApi = async () => {
    try {
      const response = await userAPI.get('/sale/user');
      if (response?.data?.presales) {
        setpresale(response.data.presales);
      } else {
        Alert.alert('Error inesperado', 'Verifica tu conexión a internet', [{
          text: 'Ok'
        }])
      }
    } catch (err) {
      Alert.alert('Error inesperado', 'Verifica tu conexión a internet', [{
        text: 'Ok'
      }])

    }
  }

  useEffect(() => {
    getApi();
    setreload(false);
  }, [reload]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      {
        presale.length > 0
          ? (
            presale.map(item => {
              return (
                <View key={item._id} sx={paidList.container}>
                  <PaidFoodCard id={item.presaleId} presaleSoldData={item} />
                </View>
              );
            })
          )
          : null
      }
      <Text>

      </Text>
    </ScrollView>
  )
}

function PaidFoodCard({ id, presaleSoldData }: any) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const presale= presalesdb.find(presale => presale._id.$oid === id);

  const { name, coverImg }: any=presale;
  const {amount,cost,_id,saleDate,SellerTeamId} = presaleSoldData;

  return (
    <FoodCard 
      onPress={() => navigation.navigate("Mi Preventa",{
        amount,
        presale,
        cost,
        _id,
        saleDate,
        SellerTeamId
      })} 
      paid 
      title={name} 
      price={cost} 
      img={{ uri: coverImg }} />
  );
}


const paidList = StyleSheet.create({
  container: {
    backgroundColor: '$background',
    //   minHeight: '100%',
    paddingHorizontal: '$3',
    //   paddingBottom: '$3'
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});