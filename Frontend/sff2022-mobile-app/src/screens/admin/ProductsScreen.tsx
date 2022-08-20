import {  StyleSheet } from 'react-native';
import React from 'react'
import { View, Text, ScrollView } from 'dripsy';
import FixedBtn from '../../components/Shared/FixedBtn';
import HomeBanner from '../../components/Banner/HomeBanner';
import ProductsList from '../../components/Lists/ProductsList';

export default function ProductsScreen() {
    return (
            <View sx={productScreen.container}>
                <FixedBtn/>
                <ScrollView>
                    <ProductsList/>
                </ScrollView>
            </View>
    )
}

const productScreen = StyleSheet.create({
    container:{
        backgroundColor:'$background',
        zIndex:1,
        flex:1,

    }
});