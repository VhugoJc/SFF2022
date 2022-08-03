import { ImageBackground } from 'react-native';
import React from 'react'
import { styles } from '../../theme/stylesheet';
import { Text, View, ScrollView } from 'dripsy';
import IconBtn from '../Button/IconBtn';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


interface Props extends StackScreenProps<any, any> {

};

export default function HomeBanner() {
    const navigation = useNavigation(); 
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
                        <IconBtn  onPress={() => navigation.navigate("Comida" as any)} type='light' name='Equipos' icon='store' />
                        <IconBtn  onPress={() => navigation.navigate("Comida" as any)} type='light' name='Combos' icon='fastfood' />
                        <IconBtn  onPress={() => navigation.navigate("Entretenimiento" as any)} type='light' name='Eventos' icon='theaters' />
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}