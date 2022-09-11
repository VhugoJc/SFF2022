import { View, Text, Image } from 'dripsy';
import React from 'react';
import { styles } from '../../theme/stylesheet';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { PresaleData } from '../../interfaces/UserInterfaces';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props{
    presale: PresaleData
}

export default function FoodDescriptionCard({presale}:Props) {
    const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <TouchableOpacity onPress={()=>navigation.navigate("Mi Comida",{
            presaleData:presale
        })}>
            <View sx={foodDescriptionCard.container}>
                <View sx={foodDescriptionCard.description}>
                    <Text sx={Object.assign({},styles.text,{color:"$primary",textTransform:'uppercase'})as object}>{presale.name}</Text>
                    <Text sx={styles.blueLabel}>{`$${presale.cost.toFixed(2)}`}</Text>
                    <Text sx={Object.assign({},styles.text,{fontSize:'$0'})}>
                        {presale.description}  
                    </Text>
                </View>
                <View sx={foodDescriptionCard.imgView}>
                    <Image style={foodDescriptionCard.img} source={{uri:presale.coverImg}}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const foodDescriptionCard = StyleSheet.create({
    description:{
        flex:3
    },
    imgView:{
        flex:2
    },
    container:{
        flexDirection:'row',
        marginTop:'$2'
    },
    img:{
        width:'100%',
        height:120
    }
});