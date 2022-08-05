import { StyleSheet, ImageSourcePropType } from 'react-native';
import React from 'react'
import { View, Text, Image } from 'dripsy'
import { styles } from '../../theme/stylesheet';

interface Props{
    imgUrl: ImageSourcePropType
}

export default function ProductsCard({imgUrl}:Props) {

    return (
        <View sx={productsCard.container}>
            <Image
                source={imgUrl}
                sx={productsCard.img}
            />
            <Text sx={styles.text}>1 Torta</Text>
            <Text sx={Object.assign({},styles.text,{color:'$blueLight'})}>Bistek, pastor, chorizo </Text>
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