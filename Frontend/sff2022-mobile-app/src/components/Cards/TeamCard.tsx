import { Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import React from 'react'
import {View} from 'dripsy';

interface teamCardProps{
    img: ImageSourcePropType
}

export default function TeamCard({img}:teamCardProps) {
    return (
        <View sx={team.conrainer as any}>
            <Image style={team.img} source={img} />
        </View>
    )
}

const team = StyleSheet.create({
    img:{
        height:200,
        width:'100%',
        borderRadius:12
    },
    conrainer:{
        marginVertical:'$2'
    }
});