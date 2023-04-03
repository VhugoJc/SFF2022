import { Card, Col, List, message, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/layout/AdminLayout';
import BasicColumn from '../../../components/charts/BasicColumn';
import BasicBar from '../../../components/charts/BasicBar';
import ListSales from '../../../components/lists/ListSales';
import axios from 'axios';
import { BASEURL } from '../../../api/config';
type Props = {}

function Sales({ }: Props) {
    const [data, setdata] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(BASEURL + '/transactions/teams');
                if (response.data) {
                    setdata(response.data);
                }

            } catch (error) {
                message.error('Error al extraer los datos')
            }
        }
        getData();
    }, []);
    return (
        <AdminLayout>
            <Card className='crud-container'>
                <div style={{height:"calc(100vh - 175px)",textAlign:"center",marginBottom:"100px"}}>
                    <h1>Ventas totales</h1>
                    {
                        data
                        ?<BasicColumn data={data}/>
                        :null
                    }
                </div>
                <div>
                    {
                        data
                        ? <ListSales type='balance' data={data} />
                        : null
                    }
                </div>
            </Card>
        </AdminLayout>
    )
}

export default Sales;