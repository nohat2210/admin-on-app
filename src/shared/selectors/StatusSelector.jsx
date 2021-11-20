import React, { useCallback, useEffect, useState } from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import * as cms from 'api/project';
import { convertDataToSelectOptions } from 'shared/utils/query-until';

const StatusSelector = ({ value, onChange }) => {
  const [statuses, setStatuses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getStatus = useCallback(async () => {
    try {
      setIsLoading(true);
      const params = {
        filter: JSON.stringify({ name: { $nin: ['Draft'] } }),
      };
      const res = await cms.getStatuses(params);
      setStatuses(res?.data?.items);
    } catch (error) {
      setStatuses([]);
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    getStatus();
  }, [getStatus]);
  return (
    <Select
      value={statuses ? value : undefined}
      showArrow
      style={{ width: 205 }}
      options={convertDataToSelectOptions(
        statuses,
        'description',
        'description',
      )}
      loading={isLoading}
      placeholder="Status"
      optionLabelProp="label"
      onChange={onChange}
    />
  );
};
StatusSelector.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default StatusSelector;
