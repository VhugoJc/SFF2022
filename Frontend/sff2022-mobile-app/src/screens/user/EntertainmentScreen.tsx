import {StyleSheet } from 'react-native';
import React from 'react';
import { View, Text } from 'dripsy';
import EntrreteinmentCard from '../../components/Cards/Entertainment';


export default function Entreteinment() {
    return (
        <View sx={entreteinment.container}>
                <EntrreteinmentCard/>
                <EntrreteinmentCard/>
        </View>
    )
}
const entreteinment = StyleSheet.create({
    container:{
        backgroundColor:'$background',
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    card:{
        width:'50%',
    }
});