import { StyleSheet } from 'react-native';
import {View, Text, Image} from 'dripsy';
import React from 'react';
import { styles } from '../../theme/stylesheet';
import moment from 'moment';

interface Props{
  date: Date | undefined
}
export default function CalendarBanner({date}:Props) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <View sx={calendarBanner.container}>
      <Text sx={Object.assign({}, styles.subtitle, { color: '$light' })} >No te lo puedes perder</Text>
      <Image sx={calendarBanner.illustration} source={require('../../../assets/img/calendar_illustration.png')}/>
      <Text sx={Object.assign({}, styles.text as any, { color: '$light', textAlign:'center' })}>{moment(date).format('DD MMMM YYYY')} </Text>
      <Text sx={Object.assign({}, styles.text as any, { color: '$light', textAlign:'center' })}>Universidad Politécnica de San Luis Potosí </Text>

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