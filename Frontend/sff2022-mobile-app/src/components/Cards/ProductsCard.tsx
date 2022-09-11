import { StyleSheet, ImageSourcePropType } from 'react-native';
import React from 'react'
import { View, Text, Image } from 'dripsy'
import { styles } from '../../theme/stylesheet';
import { ProductData } from '../../interfaces/UserInterfaces';

interface Props{
    product: ProductData
}

export default function ProductsCard({product}:Props) {

    return (
        <View sx={productsCard.container}>
            <Image
                source={{uri:product.img}}
                sx={productsCard.img}
            />
            <Text sx={styles.text}>{`${product.amount} ${product.name}`}</Text>
            <Text sx={Object.assign({},styles.text,{color:'$blueLight'})}>{product.description} </Text>
        </View>
    )
}

const productsCard = StyleSheet.create({
    container:{
        margin:'$3',
        alignItems:'center',
        width:120
    },
    img:{
        width:110,
        height:110,
    }
});