import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar, Column } from '@ant-design/plots';
interface Props{
    data: any
}
export default function BasicBar({data}:Props) {
    const [columnData, setcolumnData] = useState([]);

    useEffect(()=>{
        let dataC = data.map((item:any)=>{
            return {
                name: item.team.name,
                value: item.transaction.tortas
            }
        });
        setcolumnData(dataC);
    },[])

    const config = {
        data:columnData,
        xField: 'value',
        yField: 'name',
        seriesField: 'type'
        
    };
    return <Bar style={{color:"red",height:"100%"}} {...config} />;
};