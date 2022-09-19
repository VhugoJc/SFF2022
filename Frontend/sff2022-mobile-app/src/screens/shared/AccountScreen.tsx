import { StyleSheet, Alert } from 'react-native';
import React from 'react';
import { View, Text, Image, ScrollView } from 'dripsy';
import { styles } from '../../theme/stylesheet';
import { Icon } from '@rneui/base';
import OptionsAccount from '../../components/Shared/OptionsAccount';
import LargeBtn from '../../components/Button/LargeBtn';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';

export default function AccountScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { logOut, loading, authState } = useContext(AuthContext);
  const { user } = authState;

  const onClick = () => {
    loading();
    logOut();
  }
  return (
    <ScrollView bounces={false} sx={accountScreen.container}>
      <View style={{ minHeight: '100%' }}>
        <View sx={accountScreen.header}>
          <Image sx={accountScreen.imgAvatar} source={require('../../../assets/img/avatar.jpg')} />
          <View sx={{ marginLeft: '$3' }}>
            <Text sx={Object.assign({}, styles.text, { width: '100%', fontSize: '$2' })}>
              {`${user?.name} ${user?.lastname}`}
            </Text>
            <Text sx={Object.assign({}, styles.text, { color: '$grey' })}>
              {`${user?.email}`}
            </Text>
          </View>
          {/* <View style={{flex:1}}>
          <Icon name='arrow-forward-ios' size={15} color={'#A6A6A6'} style={{alignSelf:'flex-end'}}/>
        </View> */}
        </View>
        <View sx={styles.divider} />
        <View style={{ flex: 5 }}>
          <OptionsAccount text='Ayuda' icon='help' />
          <OptionsAccount onPress={() => navigation.navigate("Acerca de")} text='Acera de' icon='info' type='red' />
          <OptionsAccount onPress={() => navigation.navigate("Cambiar contraseña")} text='Cambiar mi contraseña' icon='fingerprint' type='primary' />
        </View>
        <View sx={accountScreen.logOut}>
          <LargeBtn onPress={() =>
            Alert.alert('Cerrar sesión', '¿Estás seguro de cerrar Sesión?', [
              {
                text: 'Cerrar Sesión',
                onPress: () => onClick()
              },
              {
                text: ' Cancelar',
                style: 'cancel'
              }
            ])
          }
            name='Cerrar Sesión' type='red' />
        </View>
      </View>
    </ScrollView>
  )
}

const accountScreen = StyleSheet.create({
  container: {
    backgroundColor: '$background',
    flex: 1,
  },
  imgAvatar: {
    width: 75,
    height: 75,
    borderRadius: 100
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '$3',
    flex: 1,
  },
  logOut: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '$3'
  }
});