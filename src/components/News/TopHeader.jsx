import React, { useState } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Layout, Dropdown, Menu, Avatar } from 'antd';
const { Header } = Layout;



export default function TopHeader() {
    const [collapsed, setCollapsed] = useState(false);
    const changeCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: '超级管理员',
            },
            {
              key: '4',
              danger: true,
              label: '退出',
            },
          ]}
        />
      );

    return (
        <Header className="site-layout-background" style={{ padding: '0 16px',  display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {
                collapsed ?
                    <MenuUnfoldOutlined onClick={changeCollapsed} /> :
                    <MenuFoldOutlined onClick={changeCollapsed} />
            }
            <div className='avatar-container' style={{ display: 'flex', alignItems: 'center' }}>
                <div className='avatar-text'>欢迎admin回来</div>
                <Dropdown overlay={menu}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    )
}
