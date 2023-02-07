import {
    AppstoreOutlined,
    CreditCardOutlined,
    TeamOutlined,
    SettingOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import React, { useState } from 'react';

import {useRouter} from 'next/router';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Gráficas', '1', <PieChartOutlined />),
    getItem('Organización', '2', <TeamOutlined />),
    getItem('Transacciones', '3', <CreditCardOutlined />),
    getItem('Configuración', '4', <SettingOutlined />),
];

const MenuLeft = ({setCollapsed,collapsed}:any) => {
    const router = useRouter();
    const [selectedKey, setselectedKey] = useState(['1'])
    
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    
    const onClick: MenuProps['onClick'] = (e) => {

        let path = '/admin';
        switch(e.key){
            case '1':
                setselectedKey(['1']);    
                router.push('/admin');
                break;
            case '2':
                setselectedKey(['2']);    
                router.push('/admin/crud');
                break;
            default:
                break;
        }                    
        
    };


    return (
        <div style={{ width:"100%"}}>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                onClick={onClick}
                defaultSelectedKeys={selectedKey}
                // defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};

export default MenuLeft;