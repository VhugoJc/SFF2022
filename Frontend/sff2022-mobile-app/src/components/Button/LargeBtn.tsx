import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'
import {  View, Text, } from 'dripsy';
import { styles } from '../../theme/stylesheet';

interface Props{
    onPress?(): void,
    name:String,
    type?: "primary" | "light" | "red" | "secondary" ;
    light?: boolean
}

export default function LargeBtn({onPress,name,type='secondary',light=false}:Props) {
    return (
        <TouchableOpacity onPress={onPress} style={{width:'90%'}}>
            <View sx={Object.assign({},largeBtn.container,{ backgroundColor:`$${type}`},light ?largeBtn.light :{})}>
                <Text sx={Object.assign({},styles.text,largeBtn.text,light ?largeBtn.lightTxt :{})}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}
const largeBtn = StyleSheet.create({
    container:{
        paddingVertical:'$3',
        borderRadius:12
    },
    text:{
        color:'$light',
        textAlign:'center'
    },
    light:{
        backgroundColor:'$background',
        borderColor:'$primary',
        borderWidth:1
    },
    lightTxt:{
        color:'$primary'
    }
});