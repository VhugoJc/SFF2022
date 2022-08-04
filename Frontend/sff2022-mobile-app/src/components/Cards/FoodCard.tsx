import React from 'react';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { styles } from '../../theme/stylesheet';
import { Icon } from '@rneui/base';
import{ View,Text,Image } from 'dripsy';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface FoodCardProps{
    img: ImageSourcePropType,
    title:string,
    price:number,
    paid?:boolean,
    fav?:boolean,
    onPress?():void
}
export default function FoodCard({img,title,price,paid=false,fav=false,onPress}:FoodCardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View sx={foodCard.container}>
            <View  style={foodCard.favicon}>
                {
                    fav?<Icon color={'#E63946'} name='favorite' />
                    :paid?
                    <Image sx={foodCard.paidIcon} source={require('../../../assets/img/paid.png')}/>
                    :null
                }
            </View>
        <Image sx={foodCard.img} source={img}/>
        <Text sx={styles.text}>{title}</Text>
        <Text sx={styles.blueLabel}>${price.toFixed(2)}</Text>
        </View>
    </TouchableOpacity>
  )
}

const foodCard = StyleSheet.create({
    container:{
        backgroundColor:'$background',
        marginVertical:'$3',
        paddingBottom:'$3'
    },
    img:{
        height:150,
        width:'100%',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        marginBottom:'$1',
    },
    favicon:{
        position:'absolute',
        zIndex:2,
        right:10,
        top:10,
    },
    paidIcon:{
        width:100,
        height:20
    }
});