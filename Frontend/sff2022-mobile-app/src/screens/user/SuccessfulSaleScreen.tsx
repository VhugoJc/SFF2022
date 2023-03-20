import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {View, Text, Image, } from 'dripsy';
import { styles } from '../../theme/stylesheet';
import SellerBanner from '../../components/Shared/SellerBanner';
import { io } from "socket.io-client";
import { baseSocketURL } from '../../api/SocketApi';

interface Props{
    id: string
}
export default function SuccessfulSaleScreen({id}:Props) {
    const socket = io(baseSocketURL);

    useEffect(()=>{
        socket.emit('disconnectUser');
    },[id])
    return (
        <View sx={suuccessfulScreen.container}>
            <Text sx={Object.assign({}, styles.subtitle, { color: '$primary',marginBottom:'$3' })}>
                Compra Exitosa
            </Text>
            <Text sx={Object.assign({},styles.text,suuccessfulScreen.instructionsText)}>
                Tu preventa ha sido registrada con éxito, por favor  verifica que aparezca en la lista de “Mis Preventas”.
            </Text>
            <SellerBanner id={id}/>
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