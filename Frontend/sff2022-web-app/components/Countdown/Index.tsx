import React, { useEffect } from 'react';
import Countdown from 'react-countdown';
import CountDownItem from './CountDownItem';

type Props = {}

export default function Index({ }: Props) {
    useEffect(()=>{
        console.log(new Date());
        
    },[]);
    const ConferenceDay = new Date("Fri Nov 11 2022 14:00:00 GMT-0500");
    const renderer = ({ days, hours, minutes, seconds, completed }:any) => {
        return (
            <>
                <CountDownItem description='Dias' number={`${days}`} />
                <CountDownItem description='Horas' number={`${hours}`} />
                <CountDownItem description='Minutos' number={`${minutes}`} />
                <CountDownItem description='Segundos' number={`${seconds}`} />
            </>
        )
    }
    return (
        <Countdown
            date={ConferenceDay}
            renderer={renderer}
        />
    )
}