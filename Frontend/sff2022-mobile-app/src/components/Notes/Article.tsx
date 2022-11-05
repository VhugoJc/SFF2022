import { View, Text, Image, } from 'dripsy'
import { StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../../theme/stylesheet';
import IconBtn from '../Button/IconBtn';

export default function Article() {
  return (
    <View sx={articles.container}>
      <Image sx={articles.img} source={require('../../../assets/img/sff_2019.jpg')} />
      <Text sx={styles.subtitle}>El Sales Force Fest regresa de forma presencial a la UPSLP</Text>
      <Text sx={styles.text}>
        Los estudiantes de 3er semestre de la Licenciatura en Mercadotecnia Internacional de la Universidad Politécnica de San Luis Potosí, te invitan a participar en el evento <Text sx={styles.textBold}>#SalesForceFest</Text> el viernes 11 de noviembre.
        ¡No te lo puedes perder! 14 equipos trabajando con la temática de Cuento infantiles adaptados al cine...
        {"\n"}
      </Text>
      {/* <IconBtn type='blueLight' name='Ver más' /> */}
    </View>
  )
}

const articles = StyleSheet.create({
  container: {
    backgroundColor: "$background",
    paddingHorizontal: '$3',
    paddingVertical: '$5',
  },
  img: {
    width: '100%',
    height: 250
  }
});