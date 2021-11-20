import request from 'core/request';

export const getCategories = params => request.get('categories', { params });

export const createCategory = ({ name, description, isActive }) =>
  request.post('categories', { name, description, isActive });

export const deleteCategory = ({ id }) => request.delete(`categories/${id}`);

export const updateCategory = ({ id, name, description, isActive }) =>
  request.put(`categories/${id}`, { name, description, isActive });
