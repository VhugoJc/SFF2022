import { StyleSheet, TouchableOpacity } from 'react-native';
import {View, Text,} from 'dripsy';
import React from 'react'
import { Icon } from '@rneui/base';
import { styles } from '../../theme/stylesheet';

interface FixedBtnProps{
    onPress?:()=>void
}
export default function FixedBtn({onPress}:FixedBtnProps) {
    
    return (
            <TouchableOpacity onPress={onPress} style={fixedBtn.touchable}>
        <View sx={Object.assign({},fixedBtn.btn,styles.shadowProp)}>
            <Icon color={'#ffffff'} name='add'/>
        </View>
        </TouchableOpacity>
    )
}

const fixedBtn = StyleSheet.create({
    btn:{
        width:60,
        height:60,
        backgroundColor:'$secondary',
        borderRadius:50,
        alignContent:'center',
        justifyContent:'center',
    },
    touchable:{
        position:'absolute',
        bottom:21,
        left:21,
        zIndex:1
    }
});