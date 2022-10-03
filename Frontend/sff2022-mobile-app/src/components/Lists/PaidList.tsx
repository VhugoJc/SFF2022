import { Alert, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react'
import FoodCard from '../Cards/FoodCard'
import { Image, Text, View } from 'dripsy';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { userAPI } from '../../api/UserApi';
import presalesdb from '../../db/presales.json';
import { styles } from '../../theme/stylesheet';


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
      style={{ minHeight: '100%' }}
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
          : (
            <View sx={paidList.empty}>
              <Image source={require('../../../assets/img/rocket_illustration.png')} sx={paidList.img} />
              <Text sx={Object.assign({}, styles.text, { textAlign: 'center' } as object)}>
                Al parecer aún no has comprado ninguna preventa ¿Qué esperas?
              </Text>
            </View>
          )
      }
      <Text>

      </Text>
    </ScrollView>
  )
}

function PaidFoodCard({ id, presaleSoldData }: any) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const presale = presalesdb.find(presale => presale._id.$oid === id);

  const { name, coverImg }: any = presale;
  const { amount, cost, _id, saleDate, SellerTeamId } = presaleSoldData;

  return (
    <FoodCard
      onPress={() => navigation.navigate("Mi Preventa", {
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
  img: {
    width: 250,
    height: 250,
  },
  empty: {
    marginTop: '$5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '$3',
  }
});