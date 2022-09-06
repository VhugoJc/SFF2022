import React from 'react'
import { Icon } from '@rneui/base';
import { View, Image } from 'dripsy';
import { styles } from '../../theme/stylesheet';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SocialMediaInterface } from '../../interfaces/UserInterfaces';
import * as WebBrowser from 'expo-web-browser';

interface Props {
    socialMediaData: SocialMediaInterface
}

export default function SocialMedia({ socialMediaData }: Props) {
    console.log(socialMediaData);
    const smAux = Object.entries(socialMediaData);
    console.log(smAux[0]);
    

    return (
        <View sx={styles.flexDirection as any}>
            {
                smAux.map(sm => {
                    if (sm[1].length > 0) {
                        if (sm[0] === 'tiktok') {
                            return (
                                <TouchableOpacity key={sm[0]} onPress={() => WebBrowser.openBrowserAsync(sm[1])}>
                                    <Image source={require('../../../assets/img/tt_ionicons.png')} sx={socialMedia.img} />
                                </TouchableOpacity>
                            )
                        } else {
                            return(<TouchableOpacity key={sm[0]} onPress={() => WebBrowser.openBrowserAsync(sm[1])}>
                                <Icon style={socialMedia.icon} color='#1D3557' type='ionicon' name={`logo-${sm[0]}`} />
                            </TouchableOpacity>)
                        }
                    }
                })

            }

        </View>
    )
}
const socialMedia = StyleSheet.create({
    img: {
        width: 25,
        height: 25,
        marginRight: '$4'
    },
    icon: {
        marginRight: 32

    }
});