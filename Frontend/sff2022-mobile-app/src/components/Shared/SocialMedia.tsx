import React from 'react'
import { Icon } from '@rneui/base';
import { View,Image} from 'dripsy';
import { styles } from '../../theme/stylesheet';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SocialMedia() {
    
    return (
        <View sx={styles.flexDirection as any}>
            <TouchableOpacity onPress={()=>console.log("###")}>
                <Icon style={socialMedia.icon} color='#1D3557' type='ionicon' name='logo-twitter' />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log("###")}>
                <Image source={require('../../../assets/img/tt_ionicons.png')} sx={socialMedia.img}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log("###")}>        
                <Icon style={socialMedia.icon} color='#1D3557' type='ionicon' name='logo-instagram' />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log("###")}>        
                <Icon style={socialMedia.icon} color='#1D3557' type='ionicon' name='logo-facebook' />
            </TouchableOpacity>        
        </View>
    )
}
const socialMedia = StyleSheet.create({
    img:{
        width:25,
        height:25,
        marginRight: '$4'
    },
    icon:{
        marginRight: 32

    }
});