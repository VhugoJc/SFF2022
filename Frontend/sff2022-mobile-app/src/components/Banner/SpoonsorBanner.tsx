import React, { useEffect, useRef } from 'react';
import { ImageSourcePropType, StyleSheet, ScrollView as RNScrollView } from 'react-native';
import { View, Text, Image } from 'dripsy';
import { styles } from '../../theme/stylesheet';
import { Sponsors } from '../../interfaces/SettingsInterface';

interface Props{
    sponsors: Sponsors[] | undefined
}
export default function SpoonsorBanner({sponsors}:Props) {
    const scrollViewRef = useRef<RNScrollView>(null);
    
    // Just show regular sponsors without infinite scroll for now
    const displaySponsors = sponsors || [];
    
    return (
        <View sx={sponsorBanner.wrapper}>
            <View sx={sponsorBanner.container}>
                <View sx={sponsorBanner.headerSection}>
                    <Text sx={sponsorBanner.title}>Nuestros Patrocinadores</Text> 
                    <Text sx={sponsorBanner.subtitle}>Marcas que hacen posible este evento</Text> 
                </View>
                <RNScrollView 
                    ref={scrollViewRef}
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false} 
                    contentContainerStyle={sponsorBanner.scrollContent}
                    scrollEnabled={true}
                    nestedScrollEnabled={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View sx={sponsorBanner.scroll}>
                        {displaySponsors.map((sponsor, index) => (
                            <ImageSponsor key={`${sponsor._id}-${index}`} img={{uri:sponsor.img}} index={index}/>
                        ))}
                    </View>
                </RNScrollView>
            </View>
        </View>
    )
}

interface imgPRops{
    img: ImageSourcePropType,
    index: number
}
function ImageSponsor({img, index}:imgPRops) {
    return(
        <View sx={sponsorBanner.imageContainer}>
            <Image sx={sponsorBanner.img} source={img}/>
        </View>    
    );
}

const sponsorBanner = StyleSheet.create({
    wrapper: {
        backgroundColor: '$background',
        paddingVertical: 40,
    },
    container: {
        paddingHorizontal: 0,
        minHeight: 300,
        paddingVertical: 24,
    },
    headerSection: {
        marginBottom: 32,
        paddingHorizontal: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '$primary',
        marginBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '$text',
        textAlign: 'center',
        opacity: 0.8,
        marginBottom: 16,
    },
    scrollContent: {
        paddingHorizontal: 24,
    },
    scroll: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 32,
        marginHorizontal: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    img: {
        width: 180,
        height: 120,
        resizeMode: 'contain',
    },
});