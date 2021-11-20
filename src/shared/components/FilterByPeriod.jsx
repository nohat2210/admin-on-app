import React from 'react';
import { Radio } from 'antd';
import PropTypes from 'prop-types';

export const PERIOD = {
  ALL: 'all',
  WEEK: 'week',
  MONTH: 'month',
  YEAR: 'year',
};

const FILTER_BUTTON = [
  {
    title: 'All',
    key: PERIOD.ALL,
  },
  {
    title: '7 days',
    key: PERIOD.WEEK,
  },
  {
    title: '30 days',
    key: PERIOD.MONTH,
  },
  {
    title: '365 days',
    key: PERIOD.YEAR,
  },
];
const FilterByPeriod = ({ onChange }) => {
  return (
    <div>
      <Radio.Group defaultValue="all" onChange={onChange} buttonStyle="solid">
        {FILTER_BUTTON.map(items => (
          <Radio.Button value={items.key} key={items.key}>
            {items.title}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};

FilterByPeriod.propTypes = {
  onChange: PropTypes.func,
};

export default FilterByPeriod;
