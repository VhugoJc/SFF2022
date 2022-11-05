import React from "react";

import { Text, StyleSheet } from 'react-native';
import { View,} from 'dripsy';
import TeamCard from '../Cards/TeamCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import teamsdb from '../../db/teams.json';
import { TeamData } from '../../interfaces/UserInterfaces';

export default function TeamsList() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const teams:any = teamsdb;
    // shuffleArray(teamsdb); // random array
    

    /* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array:any) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

    return (
        <View sx={teamsList.container}>
            {
                teams?.map((team:any)=>{
                    return(
                        <TeamCard key={team._id.$oid}  img={{uri:team.imgs[0]}} onPress={()=>navigation.navigate("Equipo",{
                            teamData:team
                        })}/>
                    )
                })
            }
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