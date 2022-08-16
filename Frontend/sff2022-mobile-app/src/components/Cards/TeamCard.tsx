import { Text, Image, StyleSheet, ImageSourcePropType, TouchableOpacity } from 'react-native';
import React from 'react'
import {View} from 'dripsy';

interface teamCardProps{
    img: ImageSourcePropType,
    onPress?():void
}

export default function TeamCard({img,onPress}:teamCardProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View sx={team.conrainer as any}>
                <Image style={team.img} source={img} />
            </View>
        </TouchableOpacity>
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