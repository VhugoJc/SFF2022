import { StyleSheet } from 'react-native';
import React from 'react'
import { View, Text,} from 'dripsy';

export default function Entertainment() {
    return (
        <View sx={entertainmentCard.container}>
            <Text>EntrreteinmentCard</Text>
        </View>
    )
}
const entertainmentCard = StyleSheet.create({
    container:{
        height:'25%',
        backgroundColor:'$primary',
        margin:'$2',
        borderRadius:12,
        padding:'$3',
        justifyContent:'center',
    }
});