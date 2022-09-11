import { Icon } from '@rneui/base';
import { View, Text, Image } from 'dripsy';
import React from 'react';
import { StyleSheet } from 'react-native';
import { styles } from '../../theme/stylesheet';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ProductCard() {

    return (
        <View>
            <TouchableOpacity>
                <View sx={productCard.container}>
                    <View sx={productCard.descContainer}>
                        <Text sx={styles.text}>
                            Torta
                        </Text>
                        <Text sx={Object.assign({}, styles.text, productCard.descTxt)}>
                            Bistek, pastor, chorizo
                        </Text>
                    </View>
                    <View sx={productCard.imgContainer}>
                        <Image sx={productCard.img} source={require('../../../assets/img/product4.png')} />
                    </View>
                    <View sx={productCard.editContainer}>
                        <Text sx={styles.textBold}>245</Text>
                    </View>
                </View>
                <View sx={styles.divider} />
            </TouchableOpacity>
        </View>
    )
}
const productCard = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        minHeight: 100,
        alignItems: 'center',
        paddingHorizontal: '$3'
    },
    img: {
        width: 75,
        height: 40
    },
    descContainer: {
        flex: 3
    },
    imgContainer: {
        flex: 2
    },
    editContainer: {
        flex: 1
    },
    descTxt: {
        color: '$secondary'
    }
});