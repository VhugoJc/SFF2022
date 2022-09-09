import { View, Text, Image } from 'dripsy';
import React from 'react'
import { StyleSheet } from 'react-native';
import { styles } from '../../theme/stylesheet';


export default function QRScreen() {
    return (
        <View sx={qrScreen.container}>
            <Text sx={Object.assign({}, styles.subtitle, { color: '$primary' })}>
                Comprando preventa
            </Text>
            <Text sx={Object.assign({},styles.text,qrScreen.instructions)}>
                Instrucciones:
            </Text>
            <Text sx={Object.assign({},styles.text,qrScreen.instructionsText)}>
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
});