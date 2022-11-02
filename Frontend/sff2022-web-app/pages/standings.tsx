import { Card, Col, Row } from 'antd';
import React from 'react';
import BasicColumn from '../components/charts/BasicColumn';

export default function Standings() {
    return (
        <div className='standings'>
            <div className='standings-header'>
                <Row>
                    <Col md={24} lg={8}>
                        <img className='standings-header-logo' src="\assets\img\logo.png" alt="" />
                    </Col>
                    <Col md={24} lg={8}>
                        <img className='standings-header-img' src="\assets\svg\pokemon.png" alt="" />
                    </Col>
                    <Col md={24} lg={8}>
                        <img className='standings-header-img' src="\assets\img\upslp_white.png" alt="" />
                    </Col>
                </Row>
            </div>
            <div className='standings-chart-container'>
                <Card className='standings-card'>
                    <BasicColumn />
                </Card>
            </div>
        </div>
    )
}
