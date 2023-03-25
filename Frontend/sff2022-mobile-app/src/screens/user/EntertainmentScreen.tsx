import { Alert, RefreshControl, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'dripsy';
import EntrreteinmentCard from '../../components/Cards/EntertainmentCard';
import { Event } from '../../interfaces/EventInterface';
import { userAPI } from '../../api/UserApi';


export default function Entreteinment() {
    const [events, setevents] = useState<Event[]>([]);
    const [refreshing, setRefreshing] = useState(false);


    useEffect(() => {
        const getEvents = async () => {
            try {
                const myEvents = await userAPI.get('/settings/event');
                setevents(myEvents.data.events);

            } catch (error) {
                Alert.alert('Error cargando los datos');
            }
        }
        getEvents();
    }, [refreshing]);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(function () {
            setRefreshing(false);
        }, 500);
    }

    return (
        <ScrollView
            sx={entreteinment.scrollView}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            <View sx={entreteinment.container}>
                {
                    events.map(event => {
                        return (
                            <View sx={entreteinment.card}
                                key={event._id}
                            >
                                <EntrreteinmentCard
                                    img={event.img}
                                    title={event.title}
                                    date={event.date}
                                />
                            </View>
                        );
                    })
                }

            </View>
        </ScrollView>
    )
}
const entreteinment = StyleSheet.create({
    container: {
        backgroundColor: '$background',
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        minHeight: '100%',
    },
    card: {
        width: '50%'
    },
    scrollView: {
        backgroundColor:'white'
    }
});