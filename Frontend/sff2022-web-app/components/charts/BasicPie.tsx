import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column, Pie } from '@ant-design/plots';
interface Props{
    data: any
}
export default function DemoColumn({data}:Props) {
    const [columnData, setcolumnData] = useState([]);

    useEffect(()=>{
        let dataC = data.map((item:any)=>{
            return {
                name: item.team.name,
                value: item.transaction.presales
            }
        });
        setcolumnData(dataC);
    },[])
    const config = {
        appendPadding: 10,
        data:columnData,
        angleField: 'value',
        colorField: 'name',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }:any) => `${(percent * 100).toFixed(0)}%`,
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return <Pie {...config} />;
};