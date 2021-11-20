import React from 'react';
import { Col, Row, Switch, Modal } from 'antd';
import PropTypes from 'prop-types';
import useGetUser from 'shared/hooks/useGetUser';

const ActiveItem = ({ title, value, id }) => {
  const { toggleActiveUser } = useGetUser(id);
  const changeActive = isEnable => {
    Modal.confirm({
      title: 'Do you want change active?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        toggleActiveUser(isEnable);
      },
    });
  };
  return (
    <Col style={{ marginBottom: 20 }}>
      <Row
        className="t-500-18px-20px c-darkgrayishblue"
        style={{ marginBottom: 10 }}
      >
        {title}
      </Row>
      <Row>
        <Switch onChange={changeActive} checked={value} />
      </Row>
    </Col>
  );
};
ActiveItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.bool,
  id: PropTypes.string,
};
export default ActiveItem;
