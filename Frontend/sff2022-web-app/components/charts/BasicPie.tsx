import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column, Pie } from '@ant-design/plots';

export default function DemoColumn() {
    const data = [
        {
            type: 'Equipo 1',
            sales: 6590,
        },
        {
            type: 'Equipo 2',
            sales: 4200,
        },
        {
            type: 'Equipo 3',
            sales: 3100,
        },
        {
            type: 'Equipo 4',
            sales: 3000,
        },
        {
            type: 'Equipo 5',
            sales: 2900,
        },
        {
            type: 'Equipo 6',
            sales: 2900,
        },
        {
            type: 'Equipo 7',
            sales: 2800,
        },
        {
            type: 'Equipo 8',
            sales: 2600,
        },
        {
            type: 'Equipo 9',
            sales: 1800,
        },
        {
            type: 'Equipo 10',
            sales: 1700,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'sales',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return <Pie {...config} />;
};