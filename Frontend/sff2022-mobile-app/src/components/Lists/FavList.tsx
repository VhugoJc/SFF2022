import { StyleSheet } from 'react-native';
import React from 'react'
import { View } from 'dripsy';
import FoodCard from '../Cards/FoodCard';

export default function FavList() {
    return (
        <View sx={favList.container}>
            <FoodCard fav title='HILO ROJO' price={80} img={require('../../../assets/img/food3.jpg')} />
        </View>
    )
}

const favList = StyleSheet.create({
    container: {
        backgroundColor: '$background',
        // minHeight: '100%',
        paddingHorizontal: '$3',
        // paddingBottom: '$3'
    }
});