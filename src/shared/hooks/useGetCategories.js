import { useCallback, useEffect, useState } from 'react';
import { convertQueryToParams } from '../utils/query-until';
import usePagination from './usePagination';
import { showError, showSuccess } from 'core/tools';
import * as cms from 'api/category';

const useGetCategories = () => {
  const { pageSize, currentPage, sorter, onChangePagination, setCurrentPage } =
    usePagination();

  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [totalItems, setTotalItem] = useState(0);
  const [filters, setFilters] = useState({});

  const onFilters = values => {
    setFilters(values);
    setCurrentPage(1);
  };

  const getCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      const params = convertQueryToParams({
        pageSize,
        currentPage,
        sorter,
        filters,
      });
      const res = await cms.getCategories(params);
      setCategories(res?.data.items);
      setTotalItem(res?.data.meta.totalItems);
    } catch (error) {
      showError(error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, pageSize, filters, sorter]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const createCategory = async ({ name, description, isActive }) => {
    try {
      setIsLoading(true);
      const response = await cms.createCategory({
        name,
        description,
        isActive,
      });
      if (response) {
        showSuccess('Category created successfully');
        getCategories();
      }
    } catch (error) {
      showError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCategory = async ({ id }) => {
    try {
      await cms.deleteCategory({ id });
      showSuccess('Category deleted successfully');
      getCategories();
    } catch (error) {
      showError(error);
    }
  };

  const updateCategory = async ({ id, name, description, isActive }) => {
    try {
      await cms.updateCategory({
        id,
        name,
        description,
        isActive,
      });
      showSuccess('Category updated successfully');
      getCategories();
    } catch (error) {
      showError(error);
    }
  };

  return {
    isLoading,
    totalItems,
    categories,
    pageSize,
    currentPage,
    onChangePagination,
    setCurrentPage,
    onFilters,
    createCategory,
    deleteCategory,
    updateCategory,
  };
};
export default useGetCategories;
