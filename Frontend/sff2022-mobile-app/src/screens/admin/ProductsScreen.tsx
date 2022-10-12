import { StyleSheet, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'dripsy';
import FixedBtn from '../../components/Shared/FixedBtn';
import HomeBanner from '../../components/Banner/HomeBanner';
import ProductsList from '../../components/Lists/ProductsList';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { userAPI } from '../../api/UserApi';

export default function ProductsScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [refreshing, setRefreshing] = useState(false);
    const [products, setproducts] = useState([]);

    useEffect(() => {
        getApi();
    }, [])

    const getApi = async () => {
        try {
            const response = await userAPI.get('/product');
            setproducts(response.data.data);
        } catch (err) {
            console.log(err);

        }
    }
    const onRefresh = async () => {
        setRefreshing(true);
        await getApi();
        setRefreshing(false);
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
                <ProductsList products={products} />
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