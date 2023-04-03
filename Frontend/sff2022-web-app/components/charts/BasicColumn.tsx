import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

interface Props{
    data: any
}
export default function DemoColumn({data}:Props) {
    const [columnData, setcolumnData] = useState([]);

    useEffect(()=>{
        let dataC = data.map((item:any)=>{
            return {
                name: item.team.name,
                value: item.transaction.balance
            }
        });
        setcolumnData(dataC);
    },[])

    const config = {
        data:columnData,
        xField: 'name',
        yField: 'value',
        columnWidthRatio: 0.8,
        
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            name: {
                alias: 'Equipo',
            },
            value: {
                alias: 'Ventas en MXN',
            },
        },
    };
    return <Column  {...config} />;
};