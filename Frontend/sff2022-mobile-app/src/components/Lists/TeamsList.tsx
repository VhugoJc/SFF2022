import React, { useEffect } from "react";

import { Text, StyleSheet } from 'react-native';
import { View,} from 'dripsy';
import TeamCard from '../Cards/TeamCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export default function TeamsList({teams}:any) {
    const navigation = useNavigation<StackNavigationProp<any>>();
    
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