import { Card, Row, Col } from 'antd'
import React from 'react';
import BasicBar from '../../components/charts/BasicBar';
import BasicColumn from '../../components/charts/BasicColumn';
import BasicPie from '../../components/charts/BasicPie';
import AdminLayout from '../../components/layout/AdminLayout';

export default function Admin() {
    return (
        <div className='admin'>
            <AdminLayout>
                <Row
                    gutter={[16,16]}
                >
                    <Col md={24} lg={24}>
                        <Card title="Ventas totales" >
                            <a href="/admin/charts/sales">
                                <BasicColumn />
                            </a>
                        </Card>
                    </Col>
                    <Col md={24} lg={12}>
                        <Card title="Tortas Vendidas" >
                            <a href="/admin/charts/sales-1">
                                <BasicBar />
                            </a>
                        </Card>
                    </Col>
                    <Col md={24} lg={12}>
                        <Card title="Combos vendidos" >
                            <a href="/admin/charts/sales-2">
                                <BasicPie />
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
