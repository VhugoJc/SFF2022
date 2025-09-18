import { View, Text, Image } from 'dripsy'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet } from 'react-native';
import { styles } from '../../theme/stylesheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LocalDataService } from '../../utils/LocalDataService';
import { TeamData } from '../../interfaces/UserInterfaces';



interface Props {
    id: string,
    btnDisable?: boolean
}



export default function SellerBanner({ id, btnDisable=false }: Props) {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [team, setteam] = useState<TeamData>();
    useEffect(()=>{
        const getTeam = async()=>{
            try {
                const response = await LocalDataService.getTeamById(id);
                if(response){
                    setteam(response);
                } else {
                    Alert.alert('Error de conexión', 'No se pudo encontrar el equipo');
                }
            } catch (error) {
                Alert.alert('Error de conexión');
            }
        }
        getTeam();
    },[]);

    return (
        <View>
            <View sx={seller.header as any}>
                <Text sx={Object.assign({}, styles.text, seller.subtitle)}>
                    Vendedor:
                </Text>
            </View>
            <TouchableOpacity onPress={() => btnDisable ? null : navigation.navigate("Equipo", {
                teamData: team
            })}>
                <Image sx={styles.imageTeanm} source={{ uri: team?.logo }} />
            </TouchableOpacity>
        </View>
    )
}

const seller = StyleSheet.create({
    header: {
        paddingHorizontal: '$3',
    },
    subtitle: {
        color: '$secondary',
        marginTop: '$4',
        fontSize: '$2'
    },
});