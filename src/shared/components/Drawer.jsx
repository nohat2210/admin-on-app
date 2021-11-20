import React from 'react';
import { Drawer } from 'antd';
import PropTypes from 'prop-types';
import { CloseSquareOutlined } from '@ant-design/icons';

const DrawerComponent = ({ visible, onClose, title, children }) => {
  return (
    <Drawer
      title={title}
      placement="right"
      closable
      headerStyle={{ backgroundColor: '#27AE60' }}
      onClose={onClose}
      closeIcon={<CloseSquareOutlined />}
      visible={visible}
      getContainer={false}
      width="560"
    >
      {children}
    </Drawer>
  );
};
DrawerComponent.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.element,
};
export default DrawerComponent;
