import { ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { View, Text, Image } from 'dripsy';
import { Icon } from '@rneui/base';
import ImagesCarousel from '../../components/Banner/ImagesCarousel';
import { styles } from '../../theme/stylesheet';
import SocialMedia from '../../components/Shared/SocialMedia';
import FoodDescriptionCard from '../../components/Cards/FoodDescriptionCard';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import teamsdb from '../../db/teams.json';
import { TeamData } from '../../interfaces/UserInterfaces';

interface Props{
    teamData:any
}

export default function TeamScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const route = useRoute<any>();
    const {teamData} = route.params;
    
    

    const teams = teamsdb;
    
    
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View sx={teamScreen.container as any}>
                    <View  sx={teamScreen.backBtn as any}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Icon name='arrow-back-ios' color={'#ffffff'} />
                        </TouchableOpacity>
                    </View>
                    <ImagesCarousel
                    arrayImages={
                        teamData.imgs.map((img:string)=>{
                            return({uri:img});
                        })
                    }
                    height={250}
                    hideDots={false}
                    />
                    <View sx={teamScreen.textContainer as any}>
                        <Text sx={Object.assign({},styles.subtitle,teamScreen.title)}>
                            {teamData.name}
                        </Text>
                        <Text>
                            {teamData.description}
                        </Text>
                        <Text sx={Object.assign({},styles.subtitle,teamScreen.title)}>
                            Redes Sociales
                        </Text>
                        <SocialMedia socialMediaData={teamData.socialMedia}/>
                        <Text sx={Object.assign({},styles.subtitle,teamScreen.title)}>
                            Menú
                        </Text>
                        <FoodDescriptionCard/>
                        <FoodDescriptionCard/>
                    </View>
            </View>
        </ScrollView>
    )
}

const teamScreen = StyleSheet.create({
    container:{
        backgroundColor:'$background',
        minHeight:'100%',
        paddingBottom:'$3'
    },
    imgHeader:{
        height:200
    },
    backBtn:{
        position:'absolute',
        padding:'$3',
        zIndex:2
    },
    textContainer:{
        marginHorizontal:'$3'
    },
    title:{
        color:'$secondary',
        textTransform:'uppercase'
    }
});