import { useEffect, useState } from 'react';
import { convertQueryToParams } from '../utils/query-until';
import usePagination from './usePagination';
import { showError } from 'core/tools';
import * as cms from 'api/user';

const useGetMyProjects = id => {
  const { pageSize, currentPage, sorter, onChangePagination, setCurrentPage } =
    usePagination();

  const [isLoading, setIsLoading] = useState(false);
  const [userProjects, setUserProjects] = useState([]);
  const [totalItems, setTotalItem] = useState(0);
  const [filters, setFilters] = useState({});

  const onFilters = values => {
    setFilters(values);
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
        const res = await cms.getUserProjects({ params, id });
        setUserProjects(res?.data.items);
        setTotalItem(res?.data.meta.totalItems);
      } catch (error) {
        showError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [pageSize, currentPage, sorter, filters]);

  return {
    isLoading,
    totalItems,
    userProjects,
    pageSize,
    currentPage,
    onChangePagination,
    setCurrentPage,
    onFilters,
  };
};
export default useGetMyProjects;
