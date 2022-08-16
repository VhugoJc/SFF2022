import React from "react";

import { Text, StyleSheet } from 'react-native';
import { View,} from 'dripsy';
import TeamCard from '../Cards/TeamCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function TeamsList() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
        <View sx={teamsList.container}>
            <TeamCard img={require('../../../assets/img/team1.jpg')} onPress={()=>navigation.navigate("Equipo")}/>
            <TeamCard img={require('../../../assets/img/team2.jpg')}/>
            <TeamCard img={require('../../../assets/img/team3.jpg')}/>
        </View>
    );
}
const teamsList = StyleSheet.create({
    container:{
        backgroundColor:'$background',
        minHeight:'90%',
        paddingHorizontal:'$3'
    }
});