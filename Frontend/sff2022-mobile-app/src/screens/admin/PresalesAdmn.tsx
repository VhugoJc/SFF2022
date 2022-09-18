import {ScrollView, View } from 'dripsy';
import React from 'react';
import { StyleSheet, RefreshControl } from 'react-native';
import EditFoodList from '../../components/Lists/EditFoodList';
import FixedBtn from '../../components/Shared/FixedBtn';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function PresalesAdmn() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(function () {
            setRefreshing(false);
        }, 500);
    }

    return (
        <View sx={presalesAdmn.container}>
            <FixedBtn onPress={()=>navigation.navigate("Editar Preventa")}/>
            <ScrollView
                  refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
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