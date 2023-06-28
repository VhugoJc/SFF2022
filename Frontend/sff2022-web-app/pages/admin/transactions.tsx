import { Alert, Button, Card, Col, message, Row, Statistic } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASEURL } from '../../api/config'
import AdminLayout from '../../components/layout/AdminLayout'
import TransactionsTable from '../../components/tables/TransactionsTable'
import useAuth from '../../Hooks/useAuth'

type Props = {}

function Transactions({ }: Props) {
    const {getToken} = useAuth();
    const [transactionsData, settransactionsData] = useState({
        users:0,
        tortas:0,
        sales:0,
        balance:0
    });

    useEffect(()=>{
        const getData = () =>{
            const token = getToken();
            const options = {
                method: 'GET',
                url: `${BASEURL}/transactions`,
                // credentials
                headers: {
                    'x-token': `${token}`
                },
            }
            axios.request(options).then(response => {
                if(response.data){
                    settransactionsData(response.data);
                }
            }).catch(error=>{
                message.error('Error al recolectar los datos de la transaccion');
                console.log(error);
                
            })
        }
        getData();
    },[]);
    return (
        <AdminLayout>
            <Card className='crud-container'>
                <div>
                    <Row gutter={24}>
                        <Col  lg={6}>
                            <Statistic title="Usuarios activos " value={transactionsData.users} />
                        </Col>
                        <Col lg={6}>
                            <Statistic title="Tortas vendidas" value={transactionsData.tortas}/>
                        </Col>
                        <Col lg={6}>
                            <Statistic title="Combos vendidos" value={transactionsData.sales} />
                        </Col>
                        <Col lg={6}>
                            <Statistic prefix={'$'} title="Balance actual (MXN)" value={transactionsData.balance} precision={2} />
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