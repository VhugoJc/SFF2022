import MenuLeft from "../Menu/LeftMenu";
import React, { useState } from 'react';
import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";


const AdminLayout = ({ children }: any) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <div className="layout-top-menu">
                {/* <h1>
                    SALES FORCE FEST
                </h1> */}
                <div className="layout-top-menu_logout">
                    <Button type="ghost">
                        <LogoutOutlined/>
                    </Button>
                </div>
            </div>
            <div className="layout-flex-container">
                <div className="layout-menu">
                    <MenuLeft collapsed={collapsed} setCollapsed={setCollapsed} />
                </div>
                <div className={`layout-children ${collapsed ? "layout-children-1" : "layout-children-2"}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;