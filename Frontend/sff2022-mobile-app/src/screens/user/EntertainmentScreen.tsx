import {StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'dripsy';
import EntrreteinmentCard from '../../components/Cards/EntertainmentCard';


export default function Entreteinment() {
    const [events, setEvents] = useState([
        {
            id:1,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F0.jpg?alt=media'},
            date: '11:00',
            title:'Inaguracion'
        },
        {
            id:2,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F1.jpg?alt=media'},
            date: '12:00',
            title:''
        },
        {
            id:3,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F3.jpg?alt=media'},
            date: '12:30',
            title:'A83'
        },
        {
            id:4,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F4.jpg?alt=media'},
            date: '13:00',
            title:'Rafa con Gafas'
        },
        {
            id:5,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F5.jpg?alt=media'},
            date: '13:30',
            title:'Baila (laberinto del fauno)'
        },
        {
            id:6,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F6.jpg?alt=media'},
            date: '14:00',
            title:'Hijos Sin Futuro'
        },
        {
            id:7,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F7.jpg?alt=media'},
            date: '14:30',
            title:'"Doc Mr" Cristhian de Jesús Macías Reyna'
        },
        {
            id:8,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F8.jpg?alt=media'},
            date: '15:00',
            title:'Banda "noisy" Banda Representativa de la UPSLP '
        },
        {
            id:9,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F9.jpg?alt=media'},
            date: '16:00',
            title:' Ligna Bellum'
        },
        {
            id:10,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F10.jpg?alt=media'},
            date: '16:30',
            title:'On Colors'
        },
        {
            id:11,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F11.jpg?alt=media'},
            date: '17:00',
            title:'The Freaks. Banda de rock'
        },
        {
            id:12,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F12.jpg?alt=media'},
            date: '17:30',
            title:'Jack Up con Derek Linan (DJ)'
        },
        {
            id:13,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F13.jpg?alt=media'},
            date: '18:00',
            title:'Mariachi Femenil Trigueñas'
        },
        {
            id:14,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F14.jpg?alt=media'},
            date: '18:30',
            title:'Reginos'
        },
        {
            id:15,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F15.jpg?alt=media'},
            date: '19:00',
            title:'Raft y Row ft Lewisa'
        },
        {
            id:16,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F16.jpg?alt=media'},
            date: '19:30',
            title:'Dj Kevin Uriel Bautista'
        },{
            id:17,
            img: {uri:'https://firebasestorage.googleapis.com/v0/b/sff2022-cd740.appspot.com/o/events%2F17.jpg?alt=media'},
            date: '20:00',
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