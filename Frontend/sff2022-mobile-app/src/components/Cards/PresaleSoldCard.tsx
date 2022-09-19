import { View, Text } from 'dripsy'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../../theme/stylesheet';
import moment from 'moment'

interface PresaleSoldProp {
    onPress?: () => void,
    soldPresale: any,
    clientName: string
}

export default function PresaleSoldCard({ onPress, soldPresale, clientName }: PresaleSoldProp) {

    return (
        <TouchableOpacity onPress={onPress}>
            <View sx={presaleSold.container}>
                <View sx={presaleSold.header}>
                    <Text sx={Object.assign({}, styles.text, { flex: 6 })}>
                        ID: {soldPresale._id}
                    </Text>
                    <Text sx={styles.text}>

                        {moment(soldPresale.saleDate).fromNow()}
                    </Text>
                </View>
                <View>
                    <Text sx={Object.assign({}, styles.text, { fontSize: 19 })}>
                        Cliente: {`${clientName}`}
                    </Text>
                    <Text sx={styles.blueLabel}>
                        Costo:  {`$${soldPresale.cost.toFixed(2)}`}
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
        paddingVertical: '$3'
    },
    header: {
        flexDirection: 'row'
    }
});