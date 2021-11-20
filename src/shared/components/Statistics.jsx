import React from 'react';
import { Card, Avatar } from 'antd';
import PropTypes from 'prop-types';

const { Meta } = Card;
const Statistics = ({ title, icon, total, size }) => {
  return (
    <Card className="card-wrapper shadow-2">
      <Meta
        avatar={<Avatar src={icon} shape="square" size={size} />}
        title={title}
      />
      <h6 className="t-600-28px-38px">{total}</h6>
    </Card>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number,
  size: PropTypes.number,
  icon: PropTypes.node,
};

export default Statistics;
