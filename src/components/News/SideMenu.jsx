import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import './index.scss'
import {
    UploadOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

const menuList = [
    {
        "id": 1,
        "title": "首页",
        "key": "/home",
        "pagepermisson": 1,
        "grade": 1,
        "icon": <UploadOutlined />
    },
    {
        "id": 2,
        "title": "用户管理",
        "key": "/user-manage",
        "pagepermisson": 1,
        "grade": 1,
        "icon": <UploadOutlined />
    },
    {
        "id": 7,
        "title": "权限管理",
        "key": "/right-manage",
        "pagepermisson": 1,
        "grade": 1,
        "icon": <UploadOutlined />
    },
    {
        "id": 14,
        "title": "新闻管理",
        "key": "/news-manage",
        "pagepermisson": 1,
        "grade": 1,
        "icon": <UploadOutlined />
    },
    {
        "id": 21,
        "title": "审核管理",
        "key": "/audit-manage",
        "pagepermisson": 1,
        "grade": 1,
        "icon": <UploadOutlined />
    },
    {
        "id": 24,
        "title": "发布管理",
        "key": "/publish-manage",
        "pagepermisson": 1,
        "grade": 1,
        "icon": <UploadOutlined />
    }
];


function SideMenu(props) {
    const [collapsed] = useState(false);
    const firstMenuItem = menuList[0].key;
    const renderMenu = (menuList) => {
        return menuList.map(item => {
            if (item.children?.length > 0) {
                return renderMenu(item.children);
            }
    
            return {
                key: item.key,
                icon: item.icon,
                label: item.title,
                title: item.title
            }
        })
    }
    const changeMenu = (params) => {
        props.history.push(params.key);
    }
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" >新闻管理系统</div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={firstMenuItem}
                items={renderMenu(menuList)}
                onClick={changeMenu}
            />
        </Sider>
    )
}

export default withRouter(SideMenu);