import React from 'react';
import { ImageSourcePropType, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../../theme/stylesheet';
import { Icon } from '@rneui/base';
import { View, Text, Image } from 'dripsy';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CircleBtn from '../Button/CircleBtn';

interface FoodCardProps {
    img: ImageSourcePropType,
    title?: string,
    price?: number,
    paid?: boolean,
    fav?: boolean,
    edit?: boolean,
    _id?: string
    onPress?(): void
}
export default function FoodCard({ img, title, price, paid = false, fav = false, edit = false, onPress }: FoodCardProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View sx={foodCard.container}>
                <View style={foodCard.favicon}>
                    {
                        paid ?
                            <Image sx={foodCard.paidIcon} source={require('../../../assets/img/paid.png')} />
                            : null
                    }
                </View>
                <ImageBackground style={foodCard.img} source={img}>
                    {
                        fav
                            ? <CircleBtn name='favorite' right />
                            : edit
                                ? <CircleBtn name='edit' right />
                                : null
                    }
                </ImageBackground>
                <Text sx={Object.assign({}, styles.text, { textTransform: 'uppercase' }) as object}>{title}</Text>
                <Text sx={styles.blueLabel}>${price ?price.toFixed(2) :null}</Text>
            </View>
        </TouchableOpacity>
    )
}

const foodCard = StyleSheet.create({
    container: {
        backgroundColor: '$background',
        marginVertical: '$3',
        paddingBottom: '$3'
    },
    img: {
        height: 150,
        width: '100%',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        marginBottom: 10,
    },
    favicon: {
        position: 'absolute',
        zIndex: 2,
        right: 10,
        top: 10,
    },
    paidIcon: {
        width: 100,
        height: 20
    }
});