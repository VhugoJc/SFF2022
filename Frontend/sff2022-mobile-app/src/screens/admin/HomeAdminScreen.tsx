import { ImageBackground, StyleSheet } from 'react-native';
import React from 'react'
import { Image, ScrollView, Text, View, } from 'dripsy';
import { styles } from '../../theme/stylesheet';
import WeekSalesChart from '../../components/Charts/WeekSalesChart';
import MyTeamMates from '../../components/Lists/MyTeamMates';

export default function HomeAdminScreen() {
    return (
        <ScrollView sx={homeAdmnScreen.container}>
            <View>
                <ImageBackground style={homeAdmnScreen.imgTop} source={require('../../../assets/img/home_background_admin.jpg')}>
                    <Text sx={styles.title}>
                        Alcanza
                    </Text>
                </ImageBackground>
            </View>
            <View>
                <Image sx={styles.imageTeanm} source={require('../../../assets/img/team1.png')} />
                <View sx={homeAdmnScreen.sales as Object}>
                    <Text sx={styles.subtitle}>
                        Ventas Totales
                    </Text>
                    <Text sx={styles.subtitle}>
                        $35,00.00
                    </Text>
                </View>
                <MyTeamMates/>
            </View>
            {/* <WeekSaplesChart/> */}
        </ScrollView>
    )
};


const homeAdmnScreen = StyleSheet.create({
    imgTop: {
        minHeight
            : 450
    },
    container: {
        flex: 1,
        backgroundColor: '$background',

    },
    sales: {
        paddingHorizontal: '$3'
    }
});
