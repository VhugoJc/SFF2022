import { StyleSheet } from 'react-native';
import React from 'react'
import FoodCard from '../Cards/FoodCard';
import {  View, Text } from 'dripsy';

export default function EditFoodList() {
    return (
        <View sx={editFoodList.container}>
            <FoodCard edit title='HILO ROJO' price={80} img={require('../../../assets/img/food3.jpg')}/>
            <FoodCard edit title='HILO ROJO' price={80} img={require('../../../assets/img/food3.jpg')}/>
            <FoodCard edit title='HILO ROJO' price={80} img={require('../../../assets/img/food3.jpg')}/>
            <FoodCard edit title='HILO ROJO' price={80} img={require('../../../assets/img/food3.jpg')}/>
        </View>
    )
}

const editFoodList = StyleSheet.create({
    container:{
        padding:'$3'
    }
});