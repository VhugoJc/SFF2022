import React, { useEffect, useState } from "react";

import { Text, StyleSheet, Alert } from 'react-native';
import { View, } from 'dripsy';
import TeamCard from '../Cards/TeamCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TeamData } from '../../interfaces/UserInterfaces';
import { userAPI } from "../../api/UserApi";
// import teamsdb from '../../db/teams.json';

export default function TeamsList() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [teams, setteams] = useState<TeamData[]>([]);

    useEffect(() => {
        const getTeam = async () => {
            try {
                const response = await userAPI.get('/team');
                if (response?.data) {
                    setteams(response.data);
                }
            } catch (error) {
                Alert.alert('Error inesperado', 'Verifica tu conexión a internet', [{
                    text: 'Ok'
                }])
            }
        }
        getTeam();
    }, [])

    return (
        <View sx={teamsList.container}>
            {
                teams.map(team => {
                    return (
                        <TeamCard key={team._id} img={{uri: team.imgs[0]}} onPress={() => navigation.navigate("Equipo", {
                            teamData: team
                        })} />
                    )
                })
            }
        </View>
    );
}
const teamsList = StyleSheet.create({
    container: {
        backgroundColor: '$background',
        minHeight: '90%',
        paddingHorizontal: '$3'
    }
});