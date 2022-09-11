import { View, Text, Image } from 'dripsy';
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import QRCodeGenerator from '../../components/QR/QRCodeGenerator';
import { styles } from '../../theme/stylesheet';
import { PresaleDataSale } from '../../interfaces/UserInterfaces';
import JWT from 'expo-jwt';

interface Props {
    presaleDataSale: PresaleDataSale,
    logo:string
}

export default function QRScreen({ presaleDataSale,logo }: Props) {
    const [jwt, setjwt] = useState('undefined'); //json web token

    useEffect(() => {
        const key = 'politort4s';//key for jwt
        setjwt(JWT.encode(presaleDataSale,key)) //generate a jwt to use in QRCode Value instead of plaine text

    }, []);
    return (
        <View sx={qrScreen.container}>
            <Text sx={Object.assign({}, styles.subtitle, { color: '$primary' })}>
                Comprando preventa
            </Text>
            {/* create QRCode with jwt */}
            <QRCodeGenerator codeValue={jwt} img={{uri:logo}} />
            <Text>
            </Text>
            <Text sx={Object.assign({}, styles.text, qrScreen.instructions)}>
                Instrucciones:
            </Text>
            <Text sx={Object.assign({}, styles.text, qrScreen.instructionsText)}>
                Muestra el códigoQR a un intregrante del equipo para que pueda validar tu orden y efectuar el pago de tu preventa.
            </Text>
            {/* <SellerBanner/> */}
        </View>
    )
}


const qrScreen = StyleSheet.create({
    container: {
        top: '$4',
        paddingHorizontal: '$3'
    },
    img: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginVertical: '$3'
    },
    instructionsText: {
        paddingHorizontal: '$4',
        fontSize: '$1',
        marginBottom: '$4',
        color: '$secondary'
    },
    instructions: {
        fontSize: '$2',
        paddingHorizontal: '$4'
    },
});