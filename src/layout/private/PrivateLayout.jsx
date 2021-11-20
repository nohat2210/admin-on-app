import ProLayout from '@ant-design/pro-layout';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BellOutlined,
  DashboardFilled,
  FolderOpenOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import CurrentUser from './CurrentUser';
import HeaderContent from './HeaderContent';
import Logo from 'shared/components/Logo';

export const ROUTES = {
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      icon: <DashboardFilled />,
    },
    {
      path: '/project',
      name: 'Project',
      icon: <FolderOpenOutlined />,
    },
    {
      path: '/notification',
      name: 'Notification',
      icon: <BellOutlined />,
    },
    {
      path: '/setting',
      name: 'Setting',
      icon: <SettingOutlined />,
    },
  ],
};
const PrivateLayout = ({ children }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <ProLayout
      route={ROUTES}
      className="min-h-screen"
      logo={
        <Logo
          width={45}
          height={45}
          style={{
            border: '1px solid white',
            borderRadius: '50%',
            marginLeft: -8,
          }}
        />
      }
      title=""
      location={{
        pathname: location.pathname,
      }}
      menuItemRender={(menuItemProps, defaultDom) => {
        return <Link to={menuItemProps.path ?? ''}>{defaultDom}</Link>;
      }}
      headerHeight={64}
      rightContentRender={CurrentUser}
      collapsedButtonRender={false}
      collapsed={collapsed}
      headerContentRender={() => {
        return (
          <HeaderContent collapsed={collapsed} setCollapsed={setCollapsed} />
        );
      }}
    >
      {children}
    </ProLayout>
  );
};

PrivateLayout.propTypes = {
  children: PropTypes.node,
};

export default PrivateLayout;
