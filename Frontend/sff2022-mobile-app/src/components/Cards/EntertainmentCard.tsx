import { StyleSheet, ImageBackground, ImageSourcePropType } from 'react-native';
import React from 'react'
import { View, Text, } from 'dripsy';
import { styles } from '../../theme/stylesheet';

interface Props {
    img: ImageSourcePropType,
    title: string,
    date: Date
}

export default function EntertainmentCard({ img, title, date }: Props) {
    return (
        <ImageBackground imageStyle={entertainmentCard.imgBckg} source={img}>
            <View sx={entertainmentCard.container}>
                <Text sx={Object.assign({}, styles.text as any, entertainmentCard.title)}>{title}</Text>
                <Text sx={Object.assign({}, styles.text, { color: "$blueLight" })}>
                    {/* {`${date.getHours().toString()}:${date.getMinutes().toString()}`} */}
                    {date.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}
                </Text>
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
        backgroundColor:"$primaryTransparent",
    },
    title:{
        color: '$light',
        textTransform:'uppercase'
    }
});