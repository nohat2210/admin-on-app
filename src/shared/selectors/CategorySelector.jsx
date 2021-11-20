import React, { useCallback, useEffect, useState } from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import * as cms from 'api/category';
import { convertDataToSelectOptions } from 'shared/utils/query-until';

const CategorySelector = ({ value, onChange }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCategory = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await cms.getCategories();
      setCategories(res?.data?.items);
    } catch (error) {
      setCategories([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getCategory();
  }, [getCategory]);
  return (
    <Select
      value={categories ? value : undefined}
      showArrow
      style={{ width: 205 }}
      options={convertDataToSelectOptions(categories, 'name', 'name')}
      loading={isLoading}
      placeholder="Category"
      optionLabelProp="label"
      onChange={onChange}
    />
  );
};
CategorySelector.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default CategorySelector;
