import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

export default function DemoColumn() {
    const data = [
        {
            type: 'Equipo 1',
            sales: 38,
        },
        {
            type: 'Equipo 2',
            sales: 38,
        },
        {
            type: 'Equipo 3',
            sales: 38,
        },
        {
            type: 'Equipo 4',
            sales: 38,
        },
        {
            type: 'Equipo 5',
            sales: 38,
        },
        {
            type: 'Equipo 6',
            sales: 38,
        },
        {
            type: 'Equipo 7',
            sales: 38,
        },
        {
            type: 'Equipo 8',
            sales: 38,
        },
        {
            type: 'Equipo 9',
            sales: 38,
        },
        {
            type: 'Equipo 10',
            sales: 38,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        columnWidthRatio: 0.8,
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: 'tipo',
            },
            sales: {
                alias: 'ventas',
            },
        },
    };
    return <Column {...config} />;
};