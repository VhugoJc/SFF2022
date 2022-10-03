import { StyleSheet, RefreshControl } from 'react-native';
import React from 'react'
import { View, Text, ScrollView } from 'dripsy';
import FixedBtn from '../../components/Shared/FixedBtn';
import HomeBanner from '../../components/Banner/HomeBanner';
import ProductsList from '../../components/Lists/ProductsList';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function ProductsScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(function () {
            setRefreshing(false);
        }, 500);
    }

    return (
        <View sx={productScreen.container}>
            {/* <FixedBtn onPress={()=>navigation.navigate('Editar Producto')}/> */}
            <ScrollView
                style={{ minHeight: '100%' }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <ProductsList />
            </ScrollView>
        </View>
    )
}

const productScreen = StyleSheet.create({
    container: {
        backgroundColor: '$background',
        zIndex: 1,
        flex: 1,

    }
});