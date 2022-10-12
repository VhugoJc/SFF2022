import { View, Text } from 'react-native'
import React from 'react'
import ProductCard from '../Cards/ProductCard';
import { AuthContext } from '../../context/authContext/AuthContext';
import { useContext, useEffect, useState } from 'react';
import productsdb from '../../db/products.json';

export default function ProductsList() {
    const { authState } = useContext(AuthContext);
    const { user }: any = authState;
    const [products, setproducts] = useState();

    useEffect(() => {
        const teamId = user?.team;
        const myProducts = productsdb.find(product=>product.teamSellerId===teamId);
        console.log(myProducts);
        
    }, [])
    return (
        <View>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </View>
    )
}