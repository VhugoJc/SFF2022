import { Button, Card, Col, Row, Statistic } from 'antd'
import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import TransactionsTable from '../../components/tables/TransactionsTable'

type Props = {}

function Transactions({ }: Props) {
    return (
        <AdminLayout>
            <Card className='crud-container'>
                <div>
                    <Row gutter={24}>
                        <Col  lg={6}>
                            <Statistic title="Usuarios activos " value={112893} />
                        </Col>
                        <Col lg={6}>
                            <Statistic title="Tortas vendidas" value={112}/>
                        </Col>
                        <Col lg={6}>
                            <Statistic title="Combos vendidos" value={12} />
                        </Col>
                        <Col lg={6}>
                            <Statistic prefix={'$'} title="Balance actual (MXN)" value={112893.4} precision={2} />
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24}>
                            <TransactionsTable/>
                        </Col>
                    </Row>
                </div>
            </Card>
        </AdminLayout>
    )
}

export default Transactions