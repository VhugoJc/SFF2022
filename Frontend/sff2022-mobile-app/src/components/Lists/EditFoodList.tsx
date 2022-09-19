import { StyleSheet } from 'react-native';
import React, { useContext } from 'react'
import FoodCard from '../Cards/FoodCard';
import { View, Text } from 'dripsy';
import presalesdb from '../../db/presales.json';
import { AuthContext } from '../../context/authContext/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function EditFoodList() {
    const { authState } = useContext(AuthContext);
    const { user }: any = authState;
    const presales = presalesdb.filter(item => item.sellerId.$oid === user.team);
    const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <View sx={editFoodList.container}>
            {
                presales
                    ? presales.map(item => {
                        return <FoodCard
                            key={item._id.$oid}
                            title={item.name}
                            price={item.cost}
                            img={{ uri: item.coverImg }}
                            onPress={()=>navigation.navigate("MiPrev",{
                                presaleData:item
                            })}
                        />
                    })
                    : null
            }
        </View>
    )
}

const editFoodList = StyleSheet.create({
    container: {
        padding: '$3'
    }
});