/* eslint-disable import/prefer-default-export */
/* eslint-disable no-return-assign */
import { get, isEmpty, omitBy } from 'lodash-es';
import getOrderBy from 'shared/utils/table-utils';

export const convertQueryToParams = queryParams => {
  const { pageSize, currentPage, filters, sorter } = queryParams;

  let params = {
    page: currentPage,
    limit: pageSize,
  };
  // sorter
  if (!isEmpty(sorter)) {
    params = {
      ...params,
      orderBy: `${sorter.field}:${getOrderBy(sorter.order)}`,
    };
  } else {
    params = { ...params, orderBy: `id:ASC` };
  }
  // filters
  if (!isEmpty(filters)) {
    let filter = {};
    const filterOmit = omitBy(filters, el => !el);
    Object.entries(filterOmit).forEach(([key, value]) => {
      if (key === 'createdAt') {
        return (filter = { ...filter, [key]: { $gte: value } });
      }
      if (key === 'startDate') {
        return (filter = {
          ...filter,
          startDate: { $gte: value.format('YYYY-MM-DD HH:mm:ss') },
        });
      }
      if (key === 'endDate') {
        return (filter = {
          ...filter,
          endDate: { $lte: value.format('YYYY-MM-DD HH:mm:ss') },
        });
      }
      return (filter = { ...filter, [key]: { $like: value } });
    });

    filter = JSON.stringify(filter);
    filter = filter.replace('startDate', 'createdAt');
    filter = filter.replace('endDate', 'createdAt');
    params = {
      ...params,
      filter,
    };
  }
  return params;
};

export const convertDataToSelectOptions = (data, valueProp, labelProp) => {
  return data?.map(item => ({
    value: get(item, valueProp),
    label: get(item, labelProp),
  }));
};
