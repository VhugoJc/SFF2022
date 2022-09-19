import { View, Text, Alert, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react'
import PresaleSoldCard from '../Cards/PresaleSoldCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { userAPI } from '../../api/UserApi';
import presalesdb from '../../db/presales.json';
import { ScrollView } from 'dripsy';

export default function SalesList() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [soldPresales, setsoldPresales] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const getApi = async () => {
        try {
            const response = await userAPI.get('/sale/my-team');
            setsoldPresales(response.data.sales);
        } catch (err) {
            Alert.alert('Error', 'Ha ocurrido un error al realizar la petición', [{
                text: 'Ok'
            }])
        }
    }

    const onRefresh = () => {
        setRefreshing(true);
        getApi();
        setTimeout(function () {
            setRefreshing(false);
        }, 500);
    }

    useEffect(() => {
        getApi();
    }, [])
    return (

        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            {
                soldPresales.length > 0
                    ? soldPresales.map((item: any) => {
                        return (
                            <PresaleSoldCard
                                key={item._id}
                                soldPresale={item}
                                clientName={`${item.clienData.name} ${item.clienData.lastname}`}
                                onPress={() => navigation.navigate("Mi Preventa", {
                                    amount: item.amount,
                                    presale: presalesdb.find(presale => presale._id.$oid === item.presaleId),
                                    cost: item.cost,
                                    _id: item._id,
                                    saleDate: item.saleDate,
                                    SellerTeamId: item.SellerTeamId,
                                    clienData: item.clienData
                                })}
                            />
                        )
                    })
                    : null
            }
        </ScrollView>
    )
}