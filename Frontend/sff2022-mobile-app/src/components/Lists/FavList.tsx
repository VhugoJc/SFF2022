import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'dripsy';
import FoodCard from '../Cards/FoodCard';
import { useContext } from 'react';
import { FavContext } from '../../context/FavsContext/FavsContext';
import { PresaleData } from '../../interfaces/UserInterfaces';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from '../../theme/stylesheet';
import { userAPI } from '../../api/UserApi';
import { Presale } from '../../interfaces/PresaleInterface'

export default function FavList() {
    const { favsState } = useContext(FavContext);
    const [favFood, setfavFood] = useState<Array<PresaleData>>([]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        const getPresale = async () => {
            const response = await userAPI.get('/presale');
            if (response.data) {
                const auxArray: any = favsState.FoodIds.map(foodId => {
                    return response.data.find((item: Presale) => item._id === foodId);
                });
                setfavFood(auxArray);
            }
        }
        if (favsState.FoodIds.length > 0) {
            getPresale();
        } else {
            setfavFood([]);
        }
    }, [favsState])

    return (
        <View sx={favList.container}>
            {
                favFood.length > 0

                    ? (favFood.map((fav) => {
                        if (fav) {
                            return <FoodCard
                                key={fav._id}
                                title={fav.name}
                                price={fav.cost}
                                img={{ uri: fav.coverImg }}
                                onPress={() => navigation.navigate("Mi Comida Fav", {
                                    presaleData: fav
                                })}
                                fav // favorites icon
                            />
                        }
                    }))
                    : (
                        <View sx={favList.empty}>
                            <Image source={require('../../../assets/img/dog_illustration.png')} sx={favList.img} />
                            <Text sx={Object.assign({}, styles.text, { textAlign: 'center' } as object)}>
                                Al parecer aún no has agregado ningún combo a favoritos
                            </Text>
                        </View>
                    )
            }
        </View>
    )
}

const favList = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$background',
        // minHeight: '100%',
        paddingHorizontal: '$3',
        // paddingBottom: '$3'
    },
    img: {
        width: 250,
        height: 250,
    },
    empty: {
        marginTop: '$5',
        alignItems: 'center',
        justifyContent: 'center',

    }
});