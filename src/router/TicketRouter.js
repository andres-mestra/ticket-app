import * as  React from 'react'
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { EntryPage } from '../pages/EntryPage';
import { ColaPage } from '../pages/ColaPage';
import { CreateTicketPage } from '../pages/CreateTicketPage';
import { DesktopPage } from '../pages/DesktopPage';

const { Sider, Content } = Layout;

export const TicketRouter = () => {
  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <Sider
          hidden={false}
          collapsedWidth="0"
          breakpoint="md"
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/ingresar">
                Ingresar
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/cola">
                Cola de tickects
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/crear">
                Crear Ticket
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">

          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/ingresar" component={EntryPage} />
              <Route path="/cola" component={ColaPage} />
              <Route path="/crear" component={CreateTicketPage} />

              <Route path="/escritorio" component={DesktopPage} />
              <Redirect to="/ingresar" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}
