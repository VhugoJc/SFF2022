import { StyleSheet, ImageBackground, ImageSourcePropType } from 'react-native';
import React from 'react'
import { View, Text,} from 'dripsy';
import { styles } from '../../theme/stylesheet';

interface Props{
    img: string,
    title:string,
    date: String
}

export default function EntertainmentCard({img,title,date}:Props) {
    return (
        <ImageBackground imageStyle={entertainmentCard.imgBckg}  source={{uri:img}}>
            <View sx={entertainmentCard.container}>
                <Text sx={entertainmentCard.title}>
                    {title}
                </Text>
                <Text sx={entertainmentCard.date}>{date.toString()}</Text>
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
        backgroundColor:'$primaryTransparent',
    },
    title:{
        color: '$light',
        textTransform:'uppercase',
        fontWeight:'700'
    },
    date:{
        color: '$light',
        fontSize:12

    }
});