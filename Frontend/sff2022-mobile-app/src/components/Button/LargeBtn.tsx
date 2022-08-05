import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'
import {  View, Text, } from 'dripsy';
import { styles } from '../../theme/stylesheet';

export default function LargeBtn() {
    return (
        <TouchableOpacity  style={{width:'90%'}}>
            <View sx={largeBtn.container}>
                <Text sx={Object.assign({},styles.text,largeBtn.text)}>Comprar preventa</Text>
            </View>
        </TouchableOpacity>
    )
}
const largeBtn = StyleSheet.create({
    container:{
        backgroundColor:'$secondary',
        paddingVertical:'$3',
        borderRadius:12
    },
    text:{
        color:'$light',
        textAlign:'center'
    }
});