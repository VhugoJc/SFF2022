import { Card, Row, Col, message, Spin } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASEURL } from '../../api/config';
import BasicBar from '../../components/charts/BasicBar';
import BasicColumn from '../../components/charts/BasicColumn';
import BasicPie from '../../components/charts/BasicPie';
import AdminLayout from '../../components/layout/AdminLayout';

export default function Admin() {
    const [data, setdata] = useState();

    useEffect(()=>{
        const getData = async()=>{
            try {
                const response = await axios.get(BASEURL+'/transactions/teams');
                if(response.data){
                    setdata(response.data);
                }
                
            } catch (error) {
                message.error('Error al extraer los datos')
            }
        }
        getData();
    },[]);

    return (
        <div className='admin'>
            <AdminLayout>
                <Row
                    gutter={[16,16]}
                >
                    <Col md={24} lg={24}>
                        <Card title="Ventas totales" >
                            <a href="/admin/charts/sales">
                                {
                                    data
                                    ?<BasicColumn data={data}/>
                                    : <Spin size='large'/>
                                }
                            </a>
                        </Card>
                    </Col>
                    <Col md={24} lg={12}>
                        <Card title="Tortas Vendidas" >
                            <a href="/admin/charts/sales-1">
                                {
                                    data
                                    ?<BasicBar  data={data} />
                                    : <Spin size='large'/>
                                }
                            </a>
                        </Card>
                    </Col>
                    <Col md={24} lg={12}>
                        <Card title="Combos vendidos" >
                            <a href="/admin/charts/sales-2">
                                {
                                    data
                                    ? <BasicPie  data={data}  />
                                    :<Spin size='large'/>
                                }
                            </a>
                        </Card>
                    </Col>
                    {/* <Col md={24} lg={12}>
                        <Card title="Ventas" >
                            <BasicColumn />
                        </Card>
                    </Col> */}
                </Row>
            </AdminLayout>
        </div>
    )
}
