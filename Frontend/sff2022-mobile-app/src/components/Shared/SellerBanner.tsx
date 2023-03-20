import { View, Text, Image } from 'dripsy'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { styles } from '../../theme/stylesheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import teamsdb from '../../db/teams.json';


interface Props {
    id: string,
    btnDisable?: boolean
}


export default function SellerBanner({ id, btnDisable=false }: Props) {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const team = teamsdb.find(item => item._id.$oid === id);
    return (
        <View>
            <View sx={seller.header as any}>
                <Text sx={Object.assign({}, styles.text, seller.subtitle)}>
                    Vendedor:
                </Text>
            </View>
            <TouchableOpacity onPress={() => btnDisable ? null : navigation.navigate("Equipo", {
                teamData: team
            })}>
                <Image sx={styles.imageTeanm} source={{ uri: team?.logo }} />
            </TouchableOpacity>
        </View>
    )
}

const seller = StyleSheet.create({
    header: {
        paddingHorizontal: '$3',
    },
    subtitle: {
        color: '$secondary',
        marginTop: '$4',
        fontSize: '$2'
    },
});