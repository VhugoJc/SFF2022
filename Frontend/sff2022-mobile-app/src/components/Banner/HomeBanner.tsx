import { ImageBackground } from 'react-native';
import React from 'react'
import { styles } from '../../theme/stylesheet';
import { Text, View, ScrollView } from 'dripsy';
import IconBtn from '../Button/IconBtn';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';



export default function HomeBanner() {
    
    const navigation = useNavigation<StackNavigationProp<any>>();
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
                        <IconBtn  onPress={() => navigation.navigate("FoodNav",{
                            screen:'Comida',
                            params:{
                                status:"Equipo"
                            }
                        })} type='light' name='Equipos' icon='store' />
                        <IconBtn  onPress={() => navigation.navigate("FoodNav",{
                                screen:'Comida',
                                params:{
                                    status:"Combos"
                                }
                            }
                        )} type='light' name='Combos' icon='fastfood' />
                        <IconBtn  onPress={() => navigation.navigate("Entretenimiento" as any)} type='light' name='Eventos' icon='theaters' />
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}