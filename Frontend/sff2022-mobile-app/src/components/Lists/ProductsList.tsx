import { View, Text } from 'react-native'
import React from 'react'
import ProductCard from '../Cards/ProductCard';

export default function ProductsList() {
    return (
        <View>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </View>
    )
}