import { ImageBackground } from 'react-native';
import React from 'react'
import { styles } from '../../theme/stylesheet';
import { Text, View, ScrollView } from 'dripsy';
import IconBtn from '../Button/IconBtn';

export default function HomeBanner() {
    return (
        <ImageBackground
            source={require("../../../assets/img/home_background.jpg")}
            style={{ height: 550 }}
        >
            <View>
                <Text sx={styles.title}>Explora</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View sx={{ flexDirection: 'row', paddingLeft: '$3', marginTop: '$3' }}>
                        <IconBtn light name='Equipos' icon='store' />
                        <IconBtn light name='Combos' icon='fastfood' />
                        <IconBtn light name='Eventos' icon='theaters' />
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}