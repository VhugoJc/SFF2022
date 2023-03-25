import React from 'react';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { View, Text, Image, ScrollView } from 'dripsy';
import { styles } from '../../theme/stylesheet';
import { Sponsors } from '../../interfaces/SettingsInterface';

interface Props{
    sponsors: Sponsors[] | undefined
}
export default function SpoonsorBanner({sponsors}:Props) {
    return (
        <View sx={sponsorBanner.container}>
            <Text sx={Object.assign({},styles.subtitle,{paddingLeft:'$3'})}>Nuestros Patrocinadores</Text> 
            <Text sx={Object.assign({},styles.text,{paddingLeft:'$3'})}>Marcas que hacen posible este evento</Text> 
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View sx={sponsorBanner.scroll}>
                    {
                        sponsors?.map(sponsor=>{
                            return <ImageSponsor key={sponsor._id} img={{uri:sponsor.img}}/>
                        })
                    }
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