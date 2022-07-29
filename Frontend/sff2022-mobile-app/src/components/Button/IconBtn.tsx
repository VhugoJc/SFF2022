import { Icon } from '@rneui/base'; //react native elements
import { View, Text } from 'dripsy';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../../theme/stylesheet';


enum PrintMedia {
    Newspaper,
    Newsletter,
    Magazine,
    Book
  }
  
interface IconBtnProps{
    name:string,
    icon?:string,
    light?:boolean
}


export default function IconBtn({name,icon='',light=false}:IconBtnProps) {
    return (
        <TouchableOpacity style={stylesBtn.iconBtn2}>
            <View sx={Object.assign({}, styles.iconBtn as any, {backgroundColor: light ?'$light' :'$blueLight',})}>
                <Icon color={'#1D3557'} name={icon} />
                <Text sx={styles.text}>{name}</Text>
            </View>
        </TouchableOpacity>

    )
}

const stylesBtn = StyleSheet.create({
    iconBtn2: {
        width: 140,
        marginRight: 10
    }
});