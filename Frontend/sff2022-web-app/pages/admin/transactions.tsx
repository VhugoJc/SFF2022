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
                        <Col span={12}>
                            <Statistic title="Usuarios activos " value={112893} />
                        </Col>
                        <Col span={12}>
                            <Statistic prefix={'$'} title="Balance actual (MXN)" value={112893.4} precision={2} />
                            {/* <Button style={{ marginTop: 16 }} type="primary">
                                Recharge
                            </Button> */}
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