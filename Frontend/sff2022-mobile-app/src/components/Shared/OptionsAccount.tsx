import React from 'react';
import { View, Text } from 'dripsy';
import { Icon } from '@rneui/base';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Props{
    text:string,
    icon: string,
    type?:"primary" | "light"  | "blueLight" | "secondary" | "background"| "red";
    onPress?:()=>void
}

export default function OptionsAccount({text,icon,type="secondary",onPress}:Props) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View sx={optionsAccount.container}>
                <View>
                    <View sx={Object.assign({},optionsAccount.circle,{backgroundColor:`$${type}`})}>
                        <Icon color={'#F1FAEE'} name={icon} />
                    </View>
                </View>
                <View sx={{marginTop:'$2'}}>
                    <Text>{text}</Text>
                </View>
                <View style={{flex:1}}>
                    <Icon name='arrow-forward-ios' size={15} color={'#A6A6A6'} style={{alignSelf:'flex-end'}}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const optionsAccount = StyleSheet.create({
    circle:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 50,
        marginTop: '$2',
        marginHorizontal: '$2',
    },
    container:{
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal:'$3'
    }
});