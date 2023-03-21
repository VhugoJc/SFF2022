import { View, Text, Alert, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react'
import PresaleSoldCard from '../Cards/PresaleSoldCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { userAPI } from '../../api/UserApi';
import { ScrollView } from 'dripsy';

export default function SalesList({ searcher }: any) {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [soldPresales, setsoldPresales] = useState([]);
    const [soldPresalesAux, setsoldPresalesAux] = useState([]);

    const [refreshing, setRefreshing] = useState(false);

    useEffect(()=>{
        getApi();
    },[])

    useEffect(() => {
        if (searcher !== "") {
            const newData = soldPresales.filter((presale: any) => {
                const { name, lastname } = presale.clienData;
                const id = presale._id.slice(20, 24);
                const fullName = `${name} ${lastname}`;
                if (id.toUpperCase().includes(searcher.toUpperCase().trim().replace(/\s/g, "")) || fullName.toUpperCase().includes(searcher.toUpperCase().trim().replace(/\s/g, ""))) {
                    return true;
                }
                return false;
            })
            setsoldPresalesAux(newData);
        } else {
            setsoldPresalesAux(soldPresales);
        }

    }, [searcher]);

    const getApi = async () => {
        try {
            const response = await userAPI.get('/sale/my-team');
            setsoldPresales(response.data.sales);
            if (searcher === "") {
                setsoldPresalesAux(soldPresales);
            }
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
                soldPresalesAux.length > 0
                    ? soldPresalesAux.map((item: any) => {
                        return (
                            <PresaleSoldCard
                                key={item._id}
                                soldPresale={{ ...item, _id: item._id.slice(20, 24) }}
                                clientName={`${item.clienData.name} ${item.clienData.lastname}`}
                                onPress={() => navigation.navigate("Mi Preventa", {
                                    amount: item.amount,
                                    presale: item,
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