import { View, Text, ScrollView, Image } from 'dripsy';
import React from 'react'
import { StyleSheet } from 'react-native';
import CircleBtn from '../../components/Button/CircleBtn';
import { styles } from '../../theme/stylesheet';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import LargeBtn from '../../components/Button/LargeBtn';
import ItemFoodScreen from '../user/ItemFoodScreen';
import QRScanner from '../../components/QR/QRScanner';

export default function NewSale() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
        <View sx={newSale.container}>
            <CircleBtn name='close' right onPress={() => navigation.goBack()} />
            <ScrollView style={{ zIndex: -1, minHeight:'100%'}} bounces={false}>
                <View sx={newSale.txtContainer as object}>
                    <Text sx={styles.subtitle}>
                        Nueva Venta
                    </Text>
                    <Image sx={newSale.img} source={require('../../../assets/img/man_illustration.png')} />
                    <Text sx={styles.text}>
                        Instrucciones:
                    </Text>
                    <Text sx={Object.assign({},styles.text,newSale.txtDescription)}>
                        Pídele a tu cliente que genere su codigo QR Para que lo puedas escanear y realizar el cobro de su preventa.
                    </Text>
                </View>
                    <View sx={newSale.btnContainer}>
                        <LargeBtn name={'Escanear código QR'}  onPress={()=>navigation.navigate('Escanear QR')}/>
                    </View>
            </ScrollView>
        </View>
    )
}

const newSale = StyleSheet.create({
    container: {
        backgroundColor: '$background',
        zIndex: -1
    },
    txtContainer: {
        flex:1,
        paddingHorizontal: '$3'
    },
    img: {
        width: 250,
        height: 250,
        alignSelf: 'center'
    },
    txtDescription:{
        color:'$secondary',
        marginBottom:'$5'
    },
    btnContainer:{
        alignItems:'center',
        flex:1,
        marginTop:'$4'
    }

});