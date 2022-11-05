import React from 'react';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { View, Text, Image, ScrollView } from 'dripsy';
import { styles } from '../../theme/stylesheet';

export default function SpoonsorBanner() {
    return (
        <View sx={sponsorBanner.container}>
            <Text sx={Object.assign({},styles.subtitle,{paddingLeft:'$3'})}>Nuestros Patrocinadores</Text> 
            <Text sx={Object.assign({},styles.text,{paddingLeft:'$3'})}>Marcas que hacen posible este evento</Text> 
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View sx={sponsorBanner.scroll}>
                    <ImageSponsor img={require('../../../assets/img/sponsor1.png')}/>
                    <ImageSponsor img={require('../../../assets/img/sponsor2.jpg')}/>
                    <ImageSponsor img={require('../../../assets/img/sponsor3.jpg')}/>
                    <ImageSponsor img={require('../../../assets/img/sponsor4.jpg')}/>
                    <ImageSponsor img={require('../../../assets/img/sponsor5.jpg')}/>
                </View>
            </ScrollView>
        </View>
    )
}

interface imgPRops{
    img: ImageSourcePropType
}
function ImageSponsor({img}:imgPRops) {
    return(
        <View>
            <Image sx={sponsorBanner.img} source={img}/>
        </View>    
    );
}

const sponsorBanner = StyleSheet.create({
    container:{
        backgroundColor:'$background',
        paddingVertical:50
    },
    img:{
        width:200,
        height:200,
        margin: '$3'
    },
    scroll:{
        flexDirection:'row',
    }
});