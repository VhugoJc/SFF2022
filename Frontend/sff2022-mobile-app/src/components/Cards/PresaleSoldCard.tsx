import { View, Text } from 'dripsy'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../../theme/stylesheet';

interface PresaleSoldProp{
    onPress?:()=>void
}

export default function PresaleSoldCard({onPress}:PresaleSoldProp) {

    return (
        <TouchableOpacity onPress={onPress}>
            <View sx={presaleSold.container}>
                <View sx={presaleSold.header}>
                    <Text sx={Object.assign({}, styles.text, { flex: 6 })}>
                        ID: 507f1f77bcf86cd799439011:
                    </Text>
                    <Text sx={styles.text}>
                        3h
                    </Text>
                </View>
                <View>
                    <Text sx={Object.assign({}, styles.text, { fontSize: 19 })}>
                        Cliente: Víctor Hugo Jiménez
                    </Text>
                    <Text sx={styles.blueLabel}>
                        Costo:  $49.00
                    </Text>
                </View>
            </View>
            <View sx={styles.divider} />
        </TouchableOpacity>
    )
}
const presaleSold = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '$3',
        paddingVertical:'$3'
    },
    header: {
        flexDirection: 'row'
    }
});