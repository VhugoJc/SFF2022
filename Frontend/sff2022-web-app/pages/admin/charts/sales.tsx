import { Card, Col, List, Row } from 'antd';
import React from 'react'
import AdminLayout from '../../../components/layout/AdminLayout';
import BasicColumn from '../../../components/charts/BasicColumn';
import BasicBar from '../../../components/charts/BasicBar';
import ListSales from '../../../components/lists/ListSales';
type Props = {}

function Sales({ }: Props) {
    const data = [
        {
            title: 'Title 1',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Title 3',
        },
        {
            title: 'Title 4',
        },
        {
            title: 'Title 5',
        },
        {
            title: 'Title 6',
        },
        {
            title: 'Title 7',
        },
        {
            title: 'Title 8',
        },
        {
            title: 'Title 9',
        },
        {
            title: 'Title 10',
        },
        {
            title: 'Title 11',
        },
    ];
    return (
        <AdminLayout>
            <Card className='crud-container'>
                <div style={{height:"calc(100vh - 175px)",textAlign:"center",marginBottom:"100px"}}>
                    <h1>Ventas totales</h1>
                    <BasicColumn />
                </div>
                <div>
                    <ListSales data={data} />
                </div>
            </Card>
        </AdminLayout>
    )
}

export default Sales;