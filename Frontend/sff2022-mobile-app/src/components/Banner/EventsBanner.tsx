import { ImageBackground, StyleSheet } from 'react-native';
import { View, Text, } from 'dripsy';

import React from 'react'
import IconBtn from '../Button/IconBtn';
import { styles } from '../../theme/stylesheet';
import { useNavigation } from '@react-navigation/native';



export default function EventsBanner() {
    const navigation = useNavigation(); 

    return (
        <ImageBackground
            source={require("../../../assets/img/sff_entreteinment.jpg")}
            style={{ height: 600 }}
        >
            <View sx={events.container}>
                <Text sx={Object.assign({}, styles.subtitle, { color: '$light' })}>
                    Los mejores eventos
                </Text>
                <Text sx={Object.assign({}, styles.text, { color: '$light' })}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    {"\n"}
                </Text>
                <IconBtn onPress={() => navigation.navigate("Entretenimiento" as any)} name='Descubrir' type='light' />
            </View>
        </ImageBackground>
    )
}


const events = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '$3',
        paddingBottom: '$4',
        justifyContent: 'flex-end'
    }
});