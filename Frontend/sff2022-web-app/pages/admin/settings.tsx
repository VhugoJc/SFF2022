import { Card } from 'antd'
import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'

type Props = {}

function settings({ }: Props) {
    return (
        <AdminLayout>
        <Card className='crud-container'>
            Configuracion
        </Card>
        </AdminLayout>
    )
}

export default settings