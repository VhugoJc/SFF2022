import React from 'react';
import { StyleSheet } from 'react-native';
import {View, Text, Image, } from 'dripsy';
import { styles } from '../../theme/stylesheet';

export default function SuccessfulSaleScreen() {
    return (
        <View sx={suuccessfulScreen.container}>
            <Text sx={Object.assign({}, styles.subtitle, { color: '$primary',marginBottom:'$3' })}>
                Compra Exitosa
            </Text>
            <Text sx={Object.assign({},styles.text,suuccessfulScreen.instructionsText)}>
                Tu preventa ha sido registrada con éxito, por favor  verifica que aparezca en la lista de “Mis Preventas”.
            </Text>
            <Image sx={styles.imageTeanm} source={require('../../../assets/img/team1.png')}/>
            <Text sx={Object.assign({},styles.text,suuccessfulScreen.instructionsText,{alignSelf:'center'})}>
                ¡Gracias por tu preferencia!
            </Text>
            <Image sx={suuccessfulScreen.imageHand} source={require('../../../assets/img/hand_illustration.png')}/>
        </View>
    )
}

const suuccessfulScreen = StyleSheet.create({
    container: {
        top: '$4',
        paddingHorizontal: '$3',
        minHeight:'100%'
    },
    img: {
        width: 200,
        height: 200,
        alignSelf:'center',
        marginVertical:'$3'
    },
    instructionsText:{
        paddingHorizontal:'$4',
        fontSize:'$1',
        marginBottom:'$4',
        color:'$secondary'
    },
    instructions:{
        fontSize:'$2',
        paddingHorizontal:'$4'
    },
    imageHand:{
        width:'50%',
        height:'50%',
        alignSelf:'center',
        position:'absolute',
        bottom:0
    }
});