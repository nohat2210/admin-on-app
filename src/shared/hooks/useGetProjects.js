import { useEffect, useState } from 'react';
import getDate from '../utils/date';
import { convertQueryToParams } from '../utils/query-until';
import usePagination from './usePagination';
import { PERIOD } from 'shared/components/FilterByPeriod';
import { showError } from 'core/tools';
import * as cms from 'api/project';

const useGetProjects = () => {
  const { pageSize, currentPage, sorter, onChangePagination, setCurrentPage } =
    usePagination();

  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [totalItems, setTotalItem] = useState(0);
  const [filters, setFilters] = useState({});

  const onFilters = values => {
    setFilters({ ...filters, ...values });
    setCurrentPage(1);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const params = convertQueryToParams({
          pageSize,
          currentPage,
          sorter,
          filters,
        });
        const res = await cms.getProjects(params);
        setProjects(res?.data.items);
        setTotalItem(res?.data.meta.totalItems);
      } catch (error) {
        showError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [filters, sorter, currentPage, pageSize]);

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
  return {
    isLoading,
    totalItems,
    projects,
    pageSize,
    currentPage,
    onChangePagination,
    setCurrentPage,
    onFilters,
    onChangePeriod,
  };
};
export default useGetProjects;
