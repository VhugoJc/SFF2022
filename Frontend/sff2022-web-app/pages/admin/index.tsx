import { Card, Row, Col } from 'antd'
import React from 'react';
import BasicColumn from '../../components/charts/BasicColumn';
import AdminLayout from '../../components/layout/AdminLayout';

export default function Admin() {
    return (
        <div className='admin'>
            <AdminLayout>
                <Row
                    
                >
                    <Col md={24} lg={12}>
                        <Card style={{width:"98%",marginBottom:'5px'}}>
                            <BasicColumn />
                        </Card>
                    </Col>
                    <Col md={24} lg={12}>
                        <Card style={{width:"98%",marginBottom:'5px'}}>
                            <BasicColumn />
                        </Card>
                    </Col>
                    <Col md={24} lg={12}>
                        <Card style={{width:"98%",marginBottom:'5px'}}>
                            <BasicColumn />
                        </Card>
                    </Col>
                    <Col md={24} lg={12}>
                        <Card style={{width:"98%",marginBottom:'5px'}}>
                            <BasicColumn />
                        </Card>
                    </Col>
                </Row>
            </AdminLayout>
        </div>
    )
}
