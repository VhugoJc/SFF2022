import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'dripsy';
import FoodCard from '../Cards/FoodCard';
import { useContext } from 'react';
import { FavContext } from '../../context/FavsContext/FavsContext';
import { PresaleData } from '../../interfaces/UserInterfaces';
import presalesdb from '../../db/presales.json';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from '../../theme/stylesheet';

export default function FavList() {
    const { favsState } = useContext(FavContext);
    const [favFood, setfavFood] = useState<Array<PresaleData>>([]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        if (favsState.FoodIds.length > 0) {
            const auxArray: any = favsState.FoodIds.map(foodId => {
                return presalesdb.find(item => item._id.$oid === foodId);
            });
            setfavFood(auxArray);

        }else{
            setfavFood([]);
        }
    }, [favsState])

    return (
        <View sx={favList.container}>
            {
                favFood.length>0

                ?(favFood.map((fav) => {
                    return <FoodCard
                        key={fav._id.$oid}
                        title={fav.name}
                        price={fav.cost}
                        img={{ uri: fav.coverImg }}
                        onPress={() => navigation.navigate("FoodNav", {
                            screen:'Mi Comida',
                            params:{
                                presaleData: fav
                            }
                        })}
                        fav // favorites icon
                    />
                }))
                : (
                    <View sx={favList.empty}>
                        <Image source={require('../../../assets/img/dog_illustration.png')} sx={favList.img}/>
                        <Text sx={Object.assign({},styles.text,{textAlign:'center'} as object)}>
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
        flex:1,
        backgroundColor: '$background',
        // minHeight: '100%',
        paddingHorizontal: '$3',
        // paddingBottom: '$3'
    },
    img:{
        width:250,
        height:250,
    },
    empty:{
        marginTop:'$5',
        alignItems:'center',
        justifyContent:'center',
        
    }
});