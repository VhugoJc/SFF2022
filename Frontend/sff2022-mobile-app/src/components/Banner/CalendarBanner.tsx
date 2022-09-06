import { StyleSheet } from 'react-native';
import {View, Text, Image} from 'dripsy';
import React from 'react';
import { styles } from '../../theme/stylesheet';

export default function CalendarBanner() {
  return (
    <View sx={calendarBanner.container}>
      <Text sx={Object.assign({}, styles.subtitle, { color: '$light' })} >No te lo puedes perder</Text>
      <Image sx={calendarBanner.illustration} source={require('../../../assets/img/calendar_illustration.png')}/>
      <Text sx={Object.assign({}, styles.text as any, { color: '$light', textAlign:'center' })}>11 de Noviembre del 2022, Universidad Politécnica de San Luis Potosí</Text>
    </View>
  )
}
const calendarBanner = StyleSheet.create({
    container:{
        backgroundColor:'$primary',
        alignItems:'center',
        padding:'$4'
    },
    illustration:{
        height:150,
        width:150
    }
});