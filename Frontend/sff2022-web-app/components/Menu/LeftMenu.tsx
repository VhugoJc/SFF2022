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
import React, { useEffect, useState } from 'react';

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
    getItem('Gráficas', '/admin', <PieChartOutlined />),
    getItem('Organización', '/admin/crud', <TeamOutlined />),
    getItem('Transacciones', '3', <CreditCardOutlined />),
    getItem('Configuración', '4', <SettingOutlined />),
];

const MenuLeft = ({setCollapsed,collapsed}:any) => {
    const router = useRouter();
    const [selectedKey, setselectedKey] = useState([''])
    
    useEffect(()=>{
        const pathname = router.pathname;
        setselectedKey([pathname]);
    },[])
    
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };


    const onClick: MenuProps['onClick'] = (e) => {
        router.push(e.key);
    };


    return (
        <div style={{ width:"100%"}}>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
            selectedKeys={selectedKey}
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