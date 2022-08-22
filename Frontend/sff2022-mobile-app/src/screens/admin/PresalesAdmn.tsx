import {ScrollView, View } from 'dripsy';
import React from 'react';
import { StyleSheet } from 'react-native';
import EditFoodList from '../../components/Lists/EditFoodList';
import FixedBtn from '../../components/Shared/FixedBtn';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function PresalesAdmn() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
        <View sx={presalesAdmn.container}>
            <FixedBtn onPress={()=>navigation.navigate("Editar Preventa")}/>
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