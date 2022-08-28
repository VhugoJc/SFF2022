import React, { useEffect, useState } from 'react'

interface Props {
    number: string,
    description: string
}

export default function CountDownItem({ number, description }: Props) {
    const [value, setValue] = useState('');
    //to solve seconds bug I used usestate and useEffect hooks
    useEffect(()=>{
        if(number.length===1){
            setValue(`0${number}`);
        }else{
            setValue(number);
        }
    },[number]);

    return (
        <div className='home-banner-countdown-item'>
            <h1 className='home-banner-countdown-text'>{value}</h1>
            <h2 className='home-banner-countdown-description'>{description}</h2>
        </div>
    )
}