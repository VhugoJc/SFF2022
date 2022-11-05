import {StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'dripsy';
import EntrreteinmentCard from '../../components/Cards/EntertainmentCard';


export default function Entreteinment() {
    const [events, setEvents] = useState([
        {
            id:1,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F0.jpg?alt=media'},
            date: new Date('December 17, 1995 11:00:00'),
            title:'Inaguracion'
        },
        {
            id:2,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F1.jpg?alt=media'},
            date: new Date('December 17, 1995 12:00:00'),
            title:''
        },
        {
            id:3,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F3.jpg?alt=media'},
            date: new Date('December 17, 1995 12:30:00'),
            title:'A83'
        },
        {
            id:4,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F4.jpg?alt=media'},
            date: new Date('December 17, 1995 13:00:00'),
            title:'Rafa con Gafas'
        },
        {
            id:5,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F5.jpg?alt=media'},
            date: new Date('December 17, 1995 13:30:00'),
            title:'Baila (laberinto del fauno)'
        },
        {
            id:6,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F6.jpg?alt=media'},
            date: new Date('December 17, 1995 14:00:00'),
            title:'Hijos Sin Futuro'
        },
        {
            id:7,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F7.jpg?alt=media'},
            date: new Date('December 17, 1995 14:30:00'),
            title:'"Doc Mr" Cristhian de Jesús Macías Reyna'
        },
        {
            id:8,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F8.jpg?alt=media'},
            date: new Date('December 17, 1995 15:00:00'),
            title:'Banda "noisy" Banda Representativa de la UPSLP '
        },
        {
            id:9,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F9.jpg?alt=media'},
            date: new Date('December 17, 1995 16:00:00'),
            title:' Ligna Bellum'
        },
        {
            id:10,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F10.jpg?alt=media'},
            date: new Date('December 17, 1995 16:30:00'),
            title:'On Colors'
        },
        {
            id:11,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F11.jpg?alt=media'},
            date: new Date('December 17, 1995 17:00:00'),
            title:'The Freaks. Banda de rock'
        },
        {
            id:12,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F12.jpg?alt=media'},
            date: new Date('December 17, 1995 17:30:00'),
            title:'Jack Up con Derek Linan (DJ)'
        },
        {
            id:13,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F13.jpg?alt=media'},
            date: new Date('December 17, 1995 18:00:00'),
            title:'Mariachi Femenil Trigueñas'
        },
        {
            id:14,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F14.jpg?alt=media'},
            date: new Date('December 17, 1995 18:30:00'),
            title:'Reginos'
        },
        {
            id:15,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F15.jpg?alt=media'},
            date: new Date('December 17, 1995 19:00:00'),
            title:'Raft y Row ft Lewisa'
        },
        {
            id:16,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F16.jpg?alt=media'},
            date: new Date('December 17, 1995 19:30:00'),
            title:'Dj Kevin Uriel Bautista'
        },{
            id:17,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F17.jpg?alt=media'},
            date: new Date('December 17, 1995 20:00:00'),
            title:'Black Wine'
        },
    ])
    return (
        <ScrollView bounces={false} sx={entreteinment.scrollView}>
            <View sx={entreteinment.container}>
                {
                    events.map(event=>{
                        return(
                            <View sx={entreteinment.card}
                            key={event.id} 
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