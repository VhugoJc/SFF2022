import { View, Text, Image } from 'dripsy';
import React from 'react';
import { styles } from '../../theme/stylesheet';
import { StyleSheet, TouchableOpacity } from 'react-native';


export default function FoodDescriptionCard() {
    return (
        <TouchableOpacity>
            <View sx={foodDescriptionCard.container}>
                <View sx={foodDescriptionCard.description}>
                    <Text sx={Object.assign({},styles.text,{color:"$primary"})}>FRANKIETORTA</Text>
                    <Text sx={styles.blueLabel}>$49.00</Text>
                    <Text sx={Object.assign({},styles.text,{fontSize:'$0'})}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry...  
                    </Text>
                </View>
                <View sx={foodDescriptionCard.imgView}>
                    <Image style={foodDescriptionCard.img} source={require("../../../assets/img/food1.jpg")}/>
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