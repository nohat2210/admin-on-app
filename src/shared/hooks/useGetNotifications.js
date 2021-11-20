import { useCallback, useEffect, useState } from 'react';
import { convertQueryToParams } from '../utils/query-until';
import usePagination from './usePagination';
import * as cms from 'api/notification';
import { showError, showSuccess } from 'core/tools';

const useGetNotifications = () => {
  const { pageSize, currentPage, sorter, onChangePagination, setCurrentPage } =
    usePagination();

  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [totalItems, setTotalItem] = useState(0);
  const [filters, setFilters] = useState({});

  const onFilters = values => {
    setFilters({ ...filters, ...values });
    setCurrentPage(1);
  };

  const getNotifications = useCallback(async () => {
    try {
      setIsLoading(true);
      const params = convertQueryToParams({
        pageSize,
        currentPage,
        sorter,
        filters,
      });
      const res = await cms.getNotifications(params);
      setNotifications(res?.data.items);
      setTotalItem(res?.data.meta.totalItems);
    } catch (error) {
      showError(error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, pageSize, filters, sorter]);

  useEffect(() => {
    getNotifications();
  }, [getNotifications]);

  const createNotification = async ({ title, bodyText }) => {
    try {
      setIsLoading(true);
      const response = await cms.createNotification({
        title,
        bodyText,
      });
      if (response) {
        showSuccess('Notification created successfully');
        getNotifications();
      }
    } catch (error) {
      showError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    totalItems,
    notifications,
    pageSize,
    currentPage,
    onChangePagination,
    setCurrentPage,
    onFilters,
    createNotification,
  };
};

export default useGetNotifications;
