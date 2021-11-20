/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';

const InfoItem = ({ title, value }) => {
  return (
    <Col className="mb-5">
      <Row
        className="t-500-18px-20px c-darkgrayishblue"
        style={{ lineHeight: 2 }}
      >
        {title}
      </Row>
      <Row className="tj t-400-18px-22px">{value}</Row>
    </Col>
  );
};

InfoItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any,
};
export default InfoItem;
