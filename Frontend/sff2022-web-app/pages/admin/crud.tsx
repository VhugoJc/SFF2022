import { Card, Tabs } from 'antd';
import React, { useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout';
import ListTeams from '../../components/lists/ListTeams';
import Foodtable from '../../components/tables/FoodTable';
import MembersTable from '../../components/tables/MembersTable';

export default function crud() {
  return (
    <AdminLayout>
        <Card className='crud-container'>
          <Tabs defaultActiveKey='1'>
            <Tabs.TabPane tab="Equipos" key='1'>
              <ListTeams/>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Integrantes" key='2'>
              <MembersTable/>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Combos" key='3'>
              <Foodtable/>
            </Tabs.TabPane>

          </Tabs>
        </Card>
    </AdminLayout>
  )
}