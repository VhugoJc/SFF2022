import { Icon } from '@rneui/base'; //react native elements
import { View, Text } from 'dripsy';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../../theme/stylesheet';

interface IconBtnProps{
    name:string;
    icon?:string;
    type: "primary" | "light" | "blueLight" | "secondary" | "background";
    onPress?():void
}


export default function IconBtn({name,icon='',type,onPress}:IconBtnProps) {
    let lightColor='$primary';
    if(type==="primary"||type==="secondary"){
        lightColor='$light';
    }
    return (
        <TouchableOpacity style={stylesBtn.iconBtn2} onPress={onPress}>
            <View sx={Object.assign({}, styles.iconBtn as any, {backgroundColor: `$${type}`})}>
                <Icon color={'#1D3557'} name={icon} />
                <Text sx={Object.assign({},styles.text,{color:lightColor})}>{name}</Text>
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