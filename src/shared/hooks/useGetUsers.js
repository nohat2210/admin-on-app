import { useCallback, useEffect, useState } from 'react';
import usePagination from './usePagination';
import { convertQueryToParams } from 'shared/utils/query-until';
import getDate from 'shared/utils/date';
import { PERIOD } from 'shared/components/FilterByPeriod';
import { showError, showSuccess } from 'core/tools';
import * as cms from 'api/user';

const useGetUsers = () => {
  const { pageSize, currentPage, sorter, onChangePagination, setCurrentPage } =
    usePagination();

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [totalItems, setTotalItem] = useState(0);
  const [filters, setFilters] = useState({});

  const onFilters = values => {
    setFilters({ ...filters, ...values });
    setCurrentPage(1);
  };

  const getUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      const params = convertQueryToParams({
        pageSize,
        currentPage,
        sorter,
        filters,
      });
      const res = await cms.getUsers(params);
      setUsers(res?.data.items);
      setTotalItem(res?.data.meta.totalItems);
    } catch (error) {
      showError(error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, pageSize, filters, sorter]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const onChangePeriod = e => {
    const period = e.target.value;
    if (period === PERIOD.ALL) {
      return setFilters({
        ...filters,
        createdAt: undefined,
      });
    }
    if (period === PERIOD.WEEK) {
      return setFilters({
        ...filters,
        createdAt: getDate(7),
      });
    }
    if (period === PERIOD.MONTH) {
      return setFilters({
        ...filters,
        createdAt: getDate(30),
      });
    }
    if (period === PERIOD.YEAR) {
      return setFilters({
        ...filters,
        createdAt: getDate(365),
      });
    }
    return setFilters({
      ...filters,
      createdAt: undefined,
    });
  };

  const updateActive = async ({ id, isEnable }) => {
    try {
      await cms.toggleActiveUser({ id, isEnable });
      showSuccess('Changed successfully');
      getUsers();
    } catch (error) {
      showError(error);
    }
  };
  return {
    isLoading,
    totalItems,
    users,
    pageSize,
    currentPage,
    onChangePagination,
    setCurrentPage,
    onFilters,
    onChangePeriod,
    updateActive,
  };
};
export default useGetUsers;
