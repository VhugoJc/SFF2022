import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import PaidPresaleScreen from '../shared/PaidPresaleScreen';

export default function CheckSalesDataScreen() {
    const route = useRoute<any>();
    const {presale,user,totalAmount} = route.params;
    
    return (
        <View>
            <PaidPresaleScreen presale={presale} user={user} totalAmount={totalAmount}/>
        </View>
    )
}