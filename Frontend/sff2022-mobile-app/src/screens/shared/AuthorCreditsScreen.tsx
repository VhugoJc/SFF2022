import React from 'react'
import {  StyleSheet } from 'react-native';
import {View, Text, Image,} from 'dripsy';
import { styles } from '../../theme/stylesheet';


export default function AuthorCredits() {
    return (
        <View sx={authorCreditScreen.container}>
            <Image sx={authorCreditScreen.img} source={require('../../../assets/img/vr_illustration.png')} />
            <View sx={authorCreditScreen.text}>
                <Text sx={Object.assign( {textAlign:'center'},styles.text) as any}>© Aplicación desarrollada por{"\n"} Victor Hugo Jiménez{"\n"}  ITI 2022</Text>
            </View>
        </View>
    )
}

const authorCreditScreen = StyleSheet.create({
    container:{
        backgroundColor:'$background',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:400,
        height:300
    },
    text:{
        marginVertical:'$4',
        textAlign:'center',
    }
});