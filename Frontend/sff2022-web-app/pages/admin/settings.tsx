import { Card, Divider } from 'antd'
import React from 'react'
import SettingsForm from '../../components/forms/SettingsForm'
import AdminLayout from '../../components/layout/AdminLayout'

type Props = {}

function settings({ }: Props) {
    return (
        <AdminLayout>
            <Card className='crud-container'>
                <SettingsForm/>
            </Card>
        </AdminLayout>
    )
}

export default settings