import { StyleSheet, ImageBackground, ImageSourcePropType } from 'react-native';
import React from 'react'
import { View, Text,} from 'dripsy';
import { styles } from '../../theme/stylesheet';

interface Props{
    img: ImageSourcePropType,
    title:string,
    date: Date
}

export default function EntertainmentCard({img,title,date}:Props) {
    return (
        <ImageBackground imageStyle={entertainmentCard.imgBckg}  source={img}>
            <View sx={entertainmentCard.container}>
                
            </View>
        </ImageBackground>
    )
}
const entertainmentCard = StyleSheet.create({
    imgBckg:{
        borderRadius:12,
        margin:6,
        minHeight:150
        
    },
    container:{
        borderRadius:12,
        margin:6,
        justifyContent:'center',
        padding:'$3',
        height:150,
    },
    title:{
        color: '$light',
        textTransform:'uppercase'
    }
});