import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd';
import SideMenu from '../../components/News/SideMenu'
import TopHeader from '../../components/News/TopHeader'
import NoPermission from '../../components/News/NoPermission'
import UserLIst from './userlist/UserLIst'
import RoleList from './rolelist/RoleList'
import RightList from './rightlist/RightList'
import Home from './home/Home'
import './SandBox.css'

export default function sandBox() {
  return (
    <Layout>
      <SideMenu></SideMenu>
      <Layout className="site-layout">
        <TopHeader></TopHeader>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/user-manage/list' component={UserLIst} />
          <Route path='/right-manage/role/list' component={RoleList} />
          <Route path='/right-manage/right/list' component={RightList} />
          <Redirect from='/' to='/home' exact />
          <Route path='*' component={NoPermission} />
        </Switch>
      </Layout>
    </Layout>
  )
}
