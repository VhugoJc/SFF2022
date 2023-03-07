import { Card, Tabs } from 'antd'
import React from 'react'
import SettingsForm from '../../components/forms/SettingsForm'
import AdminLayout from '../../components/layout/AdminLayout'

type Props = {}

function settings({ }: Props) {
    return (
        <AdminLayout>
            <Card className='crud-container'>
                <Tabs tabPosition='left'>
                    <Tabs.TabPane tab="General" key='1'>
                        <div style={{ minHeight: 'calc(100vh - 200px)' }}>
                            <SettingsForm />
                        </div>
                    </Tabs.TabPane>
                </Tabs>

            </Card>
        </AdminLayout>
    )
}

export default settings