import {ScrollView, View } from 'dripsy';
import React from 'react';
import { StyleSheet } from 'react-native';
import EditFoodList from '../../components/Lists/EditFoodList';
import FixedBtn from '../../components/Shared/FixedBtn';

export default function PresalesAdmn() {
    return (
        <View sx={presalesAdmn.container}>
            <FixedBtn/>
            <ScrollView>
                <EditFoodList/>
            </ScrollView>
        </View>
    )
}

const presalesAdmn = StyleSheet.create({
    container:{
        backgroundColor:'$background',
        zIndex:1,
        flex:1,
    }
});