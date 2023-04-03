import { Card, Col, List, message, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/layout/AdminLayout';
import BasicPie from '../../../components/charts/BasicPie';
import ListSales from '../../../components/lists/ListSales';
import axios from 'axios';
import { BASEURL } from '../../../api/config';
type Props = {}

function Sales2({ }: Props) {
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
                    <h1>Combos vendidos</h1>
                    {
                        data? <BasicPie data={data} />
                        : null
                    }
                </div>
                <div>
                    {
                        data
                        ?<ListSales type='presales' data={data} />
                        :null
                    }
                </div>
            </Card>
        </AdminLayout>
    )
}

export default Sales2;