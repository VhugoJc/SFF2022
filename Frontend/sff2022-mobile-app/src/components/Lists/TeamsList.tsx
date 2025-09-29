import React, { useEffect, useState } from "react";

import { Text, StyleSheet, Alert } from 'react-native';
import { View, } from 'dripsy';
import TeamCard from '../Cards/TeamCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TeamData } from '../../interfaces/UserInterfaces';
import { LocalDataService } from "../../utils/LocalDataService";

interface Props {
    shuffleKey?: number;
}

// Utility function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function TeamsList({ shuffleKey }: Props) {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [teams, setteams] = useState<TeamData[]>([]);

    useEffect(() => {
        let isMounted = true;
        const getTeam = async () => {
            try {
                const response = await LocalDataService.getTeams();
                if (response) {
                    if(isMounted) {
                        // Shuffle teams when shuffleKey changes
                        const teamsToSet = shuffleKey ? shuffleArray(response) : response;
                        setteams(teamsToSet);
                    }
                }
            } catch (error) {
                Alert.alert('Error inesperado', 'Verifica tu conexión a internet', [{
                    text: 'Ok'
                }])
            }
        }
        getTeam();
        return () => {
            // 👇️ when the component unmounts, set isMounted to false
            isMounted = false;
        };
    }, [shuffleKey])

    return (
        <View sx={teamsList.container}>
            {
                teams.map(team => {
                    return (
                        <TeamCard key={team._id} img={{ uri: team.imgs[0] }} onPress={() => navigation.navigate("Equipo", {
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