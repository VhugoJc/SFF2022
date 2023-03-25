import { Card, Tabs } from 'antd'
import React from 'react'
import EventsForm from '../../components/forms/EventsForm'
import SettingsForm from '../../components/forms/SettingsForm'
import SponsorsForm from '../../components/forms/SponsorForm'
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
                    <Tabs.TabPane tab="Eventos" key='2'>
                        <div style={{ minHeight: 'calc(100vh - 200px)' }}>
                            <EventsForm />
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Patrocinadores" key='3'>
                        <div style={{ minHeight: 'calc(100vh - 200px)' }}>
                            <SponsorsForm />
                        </div>
                    </Tabs.TabPane>
                </Tabs>

            </Card>
        </AdminLayout>
    )
}

export default settings