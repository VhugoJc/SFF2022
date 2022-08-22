import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import { Text, View } from 'dripsy';
import { Icon } from '@rneui/base';

export default function UploadImgBtn() {
    return (
        <TouchableOpacity style={upploadImgBtn.touchable}>
            <View sx={upploadImgBtn.container}>
                <Icon size={46} color='#1D3557' name='file-upload' />
            </View>
        </TouchableOpacity>
    )
}


const upploadImgBtn = StyleSheet.create({
    container: {
        backgroundColor: '$lightGrey',
        width: 110,
        height: 110,
        borderRadius: 20,
        alignItems:'center',
        justifyContent:'center'
    },
    touchable:{
        alignSelf:'center',
        marginTop:12
    }
});