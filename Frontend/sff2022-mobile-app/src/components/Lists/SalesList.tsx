import { View, Text } from 'react-native'
import React from 'react'
import PresaleSoldCard from '../Cards/PresaleSoldCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function SalesList() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
        <View>
            <PresaleSoldCard onPress={()=>navigation.navigate("Mi Preventa")}/>
            <PresaleSoldCard onPress={()=>navigation.navigate("Mi Preventa")}/>
            <PresaleSoldCard onPress={()=>navigation.navigate("Mi Preventa")}/>
            <PresaleSoldCard onPress={()=>navigation.navigate("Mi Preventa")}/>
        </View>
    )
}