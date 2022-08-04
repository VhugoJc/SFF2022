import {StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'dripsy';
import EntrreteinmentCard from '../../components/Cards/EntertainmentCard';


export default function Entreteinment() {
    const [events, setEvents] = useState([
        {
            id:1,
            img: require('../../../assets/img/ent_2.jpg'),
            date: new Date('December 17, 1995 11:00:00'),
            title:'Inaguracion'
        },
        {
            id:2,
            img: require('../../../assets/img/ent_1.jpg'),
            date: new Date('December 17, 1995 12:00:00'),
            title:'DJ Kevin Bautista'
        },
        {
            id:3,
            img: require('../../../assets/img/ent_3.jpg'),
            date: new Date('December 17, 1995 12:30:00'),
            title:'Stones Rec'
        },
        {
            id:4,
            img: require('../../../assets/img/ent_4.jpg'),
            date: new Date('December 17, 1995 13:00:00'),
            title:'Coro UPSLP'
        },
        {
            id:5,
            img: require('../../../assets/img/ent_5.jpg'),
            date: new Date('December 17, 1995 14:00:00'),
            title:'Vital Banda'
        },
        {
            id:6,
            img: require('../../../assets/img/ent_6.jpg'),
            date: new Date('December 17, 1995 13:00:00'),
            title:'Mariachi'
        }
    ])
    return (
        <ScrollView sx={entreteinment.scrollView}>
            <View sx={entreteinment.container}>
                {
                    events.map(event=>{
                        return(
                            <View sx={entreteinment.card}>
                                <EntrreteinmentCard
                                key={event.id} 
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
    container:{
        backgroundColor:'$background',
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        minHeight:'100%',
    },
    card:{
        width:'50%'
    },
    scrollView:{
    }
});