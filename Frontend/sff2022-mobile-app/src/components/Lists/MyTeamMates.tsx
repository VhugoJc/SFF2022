import { StyleSheet } from 'react-native';
import React from 'react'
import { styles } from '../../theme/stylesheet'
import { Text, ScrollView, Image, View } from 'dripsy';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MyTeamMates() {

    const team = [
        {
            id: 1,
            img: '../../../assets/img/avatar.jpg',
            name: 'Tu'
        },
        {
            id: 2,
            img: '../../../assets/img/avatar.jpg',
            name: 'Sarah'
        },
        {
            id: 3,
            img: '../../../assets/img/avatar.jpg',
            name: 'Sam'
        }
    ]
    return (
        <View>

            <View sx={myteam.container}>
                <Text sx={styles.subtitle}>Mi Equipo</Text>
            </View>
            <ScrollView horizontal style={{minWidth:'100%'}}>
                {
                    team.map(user => {
                        return (
                                <View key={user.id}  sx={myteam.item}>
                                    <Image sx={myteam.imgAvatar} source={require('../../../assets/img/avatar.jpg')} />
                                    <Text>
                                        {user.name}
                                    </Text>
                                </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const myteam = StyleSheet.create({
    imgAvatar: {
        borderRadius: 100,
        width: 50,
        height: 50
    },
    container: {
        padding: '$3',
    },
    item: {
        alignItems: 'center',
        marginHorizontal:'$2',
        marginBottom:'$3'
    },
});