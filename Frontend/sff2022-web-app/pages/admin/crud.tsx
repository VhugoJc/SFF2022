import { Card, Tabs } from 'antd';
import React, { useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout';
import ListTeams from '../../components/lists/ListTeams';

export default function crud() {
  return (
    <AdminLayout>
        <Card className='crud-container'>
          <Tabs defaultActiveKey='1'>
            <Tabs.TabPane tab="Equipos" key='1'>
              <ListTeams/>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Integrantes" key='2'>
              Content 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Combos" key='3'>
              Content 3
            </Tabs.TabPane>
          </Tabs>
        </Card>
    </AdminLayout>
  )
}