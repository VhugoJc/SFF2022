import { ScrollView, StyleSheet, ImageBackground, TouchableOpacity, RefreshControl, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'dripsy';
import { Icon } from '@rneui/base';
import ImagesCarousel from '../../components/Banner/ImagesCarousel';
import { styles } from '../../theme/stylesheet';
import SocialMedia from '../../components/Shared/SocialMedia';
import FoodDescriptionCard from '../../components/Cards/FoodDescriptionCard';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Presale } from '../../interfaces/PresaleInterface';
import { LocalDataService } from '../../utils/LocalDataService';


interface Props {
    teamData: any
}

export default function TeamScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const route = useRoute<any>();
    const { teamData } = route.params;
    const [presales, setpresales] = useState<Presale[]>([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        getPresales();
        setTimeout(function () {
            setRefreshing(false);
        }, 500);
    }

    const getPresales = async() =>{
        try {
            // Extract the string ID from the object if needed
            const teamId = typeof teamData._id === 'string' ? teamData._id : teamData._id.$oid;
            const response = await LocalDataService.getPresalesByTeamId(teamId);
            if(response){
                setpresales(response);
            }
        } catch (error) {
            Alert.alert('Error al obtener los combos');
        }
    }

    useEffect(()=>{
        getPresales();
    },[])

    // Refresh presales when screen comes into focus
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getPresales();
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <ScrollView showsVerticalScrollIndicator={false}
            style={{ minHeight: '100%' }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            <View sx={teamScreen.container as any}>
                <View sx={teamScreen.backBtn as any}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back-ios' color={'#ffffff'} />
                    </TouchableOpacity>
                </View>
                <ImagesCarousel
                    arrayImages={
                        teamData.imgs.map((img: string) => {
                            return ({ uri: img });
                        })
                    }
                    height={250}
                    hideDots={false}
                />
                <View sx={teamScreen.textContainer as any}>
                    <Text sx={Object.assign({}, styles.subtitle, teamScreen.title)}>
                        {teamData.name}
                    </Text>
                    <Text>
                        {teamData.description}
                    </Text>
                    <Text sx={Object.assign({}, styles.subtitle, teamScreen.title)}>
                        Redes Sociales
                    </Text>
                    <SocialMedia socialMediaData={teamData.socialMedia} />
                    <Text sx={Object.assign({}, styles.subtitle, teamScreen.title)}>
                        Menú
                    </Text>
                    {
                        presales.map(food => {
                            
                            return <FoodDescriptionCard presale={food} key={food._id} />
                        })
                    }
                </View>
            </View>
        </ScrollView>
    )
}

const teamScreen = StyleSheet.create({
    container: {
        backgroundColor: '$background',
        minHeight: '100%',
        paddingBottom: '$3'
    },
    imgHeader: {
        height: 200
    },
    backBtn: {
        position: 'absolute',
        padding: '$3',
        zIndex: 2
    },
    textContainer: {
        marginHorizontal: '$3'
    },
    title: {
        color: '$secondary',
        textTransform: 'uppercase'
    }
});