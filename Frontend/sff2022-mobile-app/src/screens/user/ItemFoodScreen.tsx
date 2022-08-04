import { Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { View, Text, } from 'dripsy';
import React from 'react';


export default function ItemFoodScreen() {
    return (
        <View
        // bounces={false}
        >
            <ImageBackground
            style={itemFood.header}
            source={require('../../../assets/img/food1.jpg')}
        >
            <Text>
                ss
            </Text>
        </ImageBackground>
        <View sx={itemFood.container}>
            <Text>
                1
            </Text>
        </View>
        
        </View>
    )
}

const itemFood = StyleSheet.create({
    container: {
        backgroundColor: '$background',
        minHeight: '130%',
        padding: '$3',
    },
    header: {
        height:200
    }
});