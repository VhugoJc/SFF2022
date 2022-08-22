import { View, Text, TextInput } from 'dripsy';
import React from 'react'
import { styles } from '../../theme/stylesheet';
import { ScrollView, StyleSheet } from 'react-native';
import { Icon } from '@rneui/base';
import SalesList from '../../components/Lists/SalesList';

export default function OldSales() {
    
    return (
        <View sx={oldSales.container}>
            <View sx={Object.assign({},oldSales.searchSection,styles.serchInput)}>
                <Icon style={oldSales.searchIcon} name='search' size={20} color="#A6A6A6"/>
                <TextInput sx={oldSales.input} placeholder='Buscar '/>
            </View>
            <ScrollView>
                <SalesList/>
            </ScrollView>
        </View>
    )
}

const oldSales = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'$background',
        paddingHorizontal:'$2',
        paddingTop:-2
    },
    searchIcon: {
        padding: 10,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    input:{
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
    }
});