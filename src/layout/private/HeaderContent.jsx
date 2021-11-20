import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import React from 'react';
import PropTypes from 'prop-types';

const HeaderContent = ({ collapsed, setCollapsed }) => {
  return (
    <Text
      onClick={() => setCollapsed(!collapsed)}
      style={{
        fontSize: '16px',
      }}
    >
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Text>
  );
};

HeaderContent.propTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};
export default HeaderContent;
