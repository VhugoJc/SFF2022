import { ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { View, Text, Image } from 'dripsy';
import { Icon } from '@rneui/base';
import ImagesCarousel from '../../components/Banner/ImagesCarousel';
import { styles } from '../../theme/stylesheet';
import SocialMedia from '../../components/Shared/SocialMedia';
import FoodDescriptionCard from '../../components/Cards/FoodDescriptionCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function TeamScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();
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
                        [
                            "https://images.squarespace-cdn.com/content/53b839afe4b07ea978436183/1608506201082-GU22QYZJC5TWXRSY24RX/traditional-food-around-the-world-Travlinmad.jpg?content-type=image%2Fjpeg"
                            ,"https://images.squarespace-cdn.com/content/53b839afe4b07ea978436183/1608506201082-GU22QYZJC5TWXRSY24RX/traditional-food-around-the-world-Travlinmad.jpg?content-type=image%2Fjpeg"
                            ,"https://images.squarespace-cdn.com/content/53b839afe4b07ea978436183/1608506201082-GU22QYZJC5TWXRSY24RX/traditional-food-around-the-world-Travlinmad.jpg?content-type=image%2Fjpeg"
                        ]
                    }
                    height={250}
                    hideDots={false}
                    />
                    <View sx={teamScreen.textContainer as any}>
                        <Text sx={Object.assign({},styles.subtitle,teamScreen.title)}>
                            FRANKIE TORTA
                        </Text>
                        <Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Text>
                        <Text sx={Object.assign({},styles.subtitle,teamScreen.title)}>
                            Redes Sociales
                        </Text>
                        <SocialMedia/>
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
        color:'$secondary'
    }
});