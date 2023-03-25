import { View, Text, Image,} from 'dripsy'
import {StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../../theme/stylesheet';
import IconBtn from '../Button/IconBtn';
import { HomeData } from '../../interfaces/SettingsInterface';
import * as WebBrowser from 'expo-web-browser';
interface Props{
  homeData:HomeData | undefined 
}
export default function Article({homeData}:Props) {
  return (
    <View sx={articles.container}>
      <Image sx={articles.img} source={{uri:homeData?.img}} />
      <Text sx={styles.subtitle}>{homeData?.title}</Text>
      <Text sx={styles.text}>
      {homeData?.description}
      {"\n"}
      </Text>
      <IconBtn onPress={()=> WebBrowser.openBrowserAsync(homeData?.url as any)} type='blueLight' name='Ver más...'/>
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