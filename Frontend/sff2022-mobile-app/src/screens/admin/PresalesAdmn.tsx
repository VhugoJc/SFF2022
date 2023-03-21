import { ScrollView, View } from 'dripsy';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, RefreshControl, Alert } from 'react-native';
import EditFoodList from '../../components/Lists/EditFoodList';
import FixedBtn from '../../components/Shared/FixedBtn';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Presale } from '../../interfaces/SalesInterface';
import { userAPI } from '../../api/UserApi';
import { AuthContext } from '../../context/authContext/AuthContext';

export default function PresalesAdmn() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [refreshing, setRefreshing] = React.useState(false);
    const [presales, setpresales] = useState<Presale[]>([]);
    const {user} = useContext(AuthContext).authState;

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(function () {
            setRefreshing(false);
        }, 500);
    }

    useEffect(()=>{
        const getPresales = async() =>{
            try {
                const response = await userAPI('/presale/'+user?.team);
                setpresales(response.data);
            } catch (error) {
                Alert.alert('Error al cargar las preventas');
            }
        }
        getPresales();
    },[])

    return (
        <View sx={presalesAdmn.container}>
            {/* <FixedBtn onPress={()=>navigation.navigate("Editar Preventa")}/> */}
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <EditFoodList presales={presales} />
            </ScrollView>
        </View>
    )
}

const presalesAdmn = StyleSheet.create({
    container: {
        backgroundColor: '$background',
        zIndex: 1,
        flex: 1,
    }
});