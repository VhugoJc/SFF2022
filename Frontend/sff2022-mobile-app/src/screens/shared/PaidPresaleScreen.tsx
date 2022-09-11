import { View, Text, ScrollView, Image } from 'dripsy';
import React from 'react';
import CircleBtn from '../../components/Button/CircleBtn';
import { styles } from '../../theme/stylesheet';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import FoodDescriptionCard from '../../components/Cards/FoodDescriptionCard';
import SellerBanner from '../../components/Shared/SellerBanner';

export default function PaidPresaleScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <View>
            <CircleBtn right onPress={() => navigation.goBack()} name='close' />
            <ScrollView sx={paidPrewsale.container} bounces={false}>
                <Text sx={styles.subtitle}>Mi Preventa</Text>
                <View sx={paidPrewsale.idContainer}>
                    <Text sx={styles.text}>
                        ID:
                    </Text>
                    <Text sx={Object.assign({},styles.text,{color:'$secondary'})}>
                        507f1f77bcf86cd799439011
                    </Text>
                </View>
                {/* <FoodDescriptionCard/> */}
                <View>
                    <Text sx={styles.text}>
                        Cantidad: 1
                    </Text>
                    <Text sx={styles.text}>
                        Fecha 24 de Junio del 2022
                    </Text>
                    <Text sx={styles.subtitle}>
                        Total: $49.00
                    </Text>
                </View>
                {/* <SellerBanner/> */}
            </ScrollView>
        </View>
    )
}

const paidPrewsale = StyleSheet.create({
    container: {
        backgroundColor: '$background',
        minHeight: '100%',
        zIndex: -1,
        paddingHorizontal: '$3',
    },
    idContainer:{
        flexDirection:'row',
        marginBottom:'$5'
    },
    seller:{
        fontSize:'$2',
        marginTop:'$4',
        color:'$secondary'
    }
});