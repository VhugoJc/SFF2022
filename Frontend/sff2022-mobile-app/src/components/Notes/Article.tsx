import { View, Text, Image,} from 'dripsy'
import {StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../../theme/stylesheet';
import IconBtn from '../Button/IconBtn';

export default function Article() {
  return (
    <View sx={articles.container}>
      <Image sx={articles.img} source={require('../../../assets/img/sff_2019.jpg')} />
      <Text sx={styles.subtitle}>El Sales Force Fest regresa de forma presencial a la UPSLP</Text>
      <Text sx={styles.text}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      {"\n"}
      </Text>
      <IconBtn type='blueLight' name='Ver más...'/>
    </View>
  )
}

const articles = StyleSheet.create({
    container:{
      backgroundColor:"$background",
      paddingHorizontal:'$3',
      paddingVertical:'$5',
    },
    img:{
      width:'100%',
      height: 250
    }
});