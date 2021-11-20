/* eslint-disable no-return-assign */
import request from '../core/request';

export const getUsers = params => request.get('users', { params });
export const getUserId = ({ id }) => request.get(`users/${id}`);
export const getUserProjects = ({ params, id }) =>
  request.get(`users/${id}/projects`, { params });
export const toggleActiveUser = ({ id, isEnable }) =>
  request.put(`users/${id}/status`, { isEnable });
