import { StyleSheet, RefreshControl, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'dripsy';
import { styles } from '../../theme/stylesheet';
import LargeBtn from '../../components/Button/LargeBtn';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { userAPI } from '../../api/UserApi';

export default function MoneyScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [refreshing, setRefreshing] = useState(false);
  const [total, settotal] = useState(0);
  const [week, setWeek] = useState(0);
  const [today, setToday] = useState(0);

  const getApi = async () => {
    try {
      const response = await userAPI.get('/sale/total-team');
      settotal(response.data.total);
      setWeek(response.data.week);
      setToday(response.data.today);

    } catch (err) {
      Alert.alert('Error', 'Ha ocurrido un error al realizar la petición', [{
        text: 'Ok'
      }])
    }
  }

  useEffect(() => {
    getApi();
  }, [])
  const onRefresh = () => {
    setRefreshing(true);
    getApi();
    setTimeout(function () {
      setRefreshing(false);
    }, 500);
  }

  return (
    <ScrollView
      sx={moneyScreen.container}
      // bounces={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <Image sx={Object.assign({}, moneyScreen.img, styles.shadowProp)} source={require('../../../assets/img/sell_illustration.png')} />
      <View sx={moneyScreen.txtContainer as any}>
        <Text sx={styles.subtitle as object}>
          Ventas Totales
        </Text>
        <Text sx={styles.text}>
          {`$${total.toFixed(2)}`}
        </Text>
      </View>
      <View sx={moneyScreen.txtContainer as object}>
        <Text sx={styles.subtitle}>
          Ventas Hoy
        </Text>
        <Text sx={styles.text}>
          {`$${today.toFixed(2)}`}
        </Text>
      </View>
      <View sx={moneyScreen.txtContainer as object}>
        <Text sx={styles.subtitle}>
          Ventas Esta Semana
        </Text>
        <Text sx={styles.text}>
          {`$${week.toFixed(2)}`}
        </Text>
      </View>
      <View sx={moneyScreen.btnContainer}>
        <LargeBtn onPress={() => navigation.navigate("Nueva Venta")} name={'Nueva Venta'} />
      </View>
      <View sx={moneyScreen.btnContainer}>
        <LargeBtn onPress={() => navigation.navigate("Ventas Anteriores")} light name={'Mis Ventas Anteriores'} />
      </View>
    </ScrollView>
  )
}

const moneyScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$background'
  },
  img: {
    width: 90,
    height: 50,
    alignSelf: 'center',
    marginVertical: '$3',
  },
  txtContainer: {
    paddingHorizontal: '$3',
    paddingVertical: '$1'
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: '$3',


  }
});