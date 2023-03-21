import { Alert, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react'
import FoodCard from '../Cards/FoodCard';
import { View, Text } from 'dripsy';
import { AuthContext } from '../../context/authContext/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Presale } from '../../interfaces/SalesInterface';
import { userAPI } from '../../api/UserApi';

interface Props{
    presales: Array<Presale>
}
export default function EditFoodList({presales}:Props) {
    const { authState } = useContext(AuthContext);
    const { user } = authState;
    
    const navigation = useNavigation<StackNavigationProp<any>>();
    
    return (
        <View sx={editFoodList.container}>
            {
                presales.length>0
                    ? presales.map(item => {
                        return <FoodCard
                            key={item._id}
                            title={item.name}
                            price={item.cost}
                            img={{ uri: item.coverImg }}
                            onPress={()=>navigation.navigate("MiPrev",{
                                presaleData:item
                            })}
                        />
                    })
                    : <Text>[]</Text>
            }
        </View>
    )
}

const editFoodList = StyleSheet.create({
    container: {
        padding: '$3'
    }
});