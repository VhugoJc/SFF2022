import React from "react";

import { Text, StyleSheet } from 'react-native';
import { View,} from 'dripsy';
import TeamCard from '../Cards/TeamCard';

export default function TeamsList() {
    return (
        <View sx={teamsList.container}>
            <TeamCard img={require('../../../assets/img/team1.jpg')}/>
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