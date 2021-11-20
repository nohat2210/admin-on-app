/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import qs from 'qs';
import { getToken, getRefreshToken, setAccessToken } from './token';
import { refreshToken } from 'api/auth';

const request = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 10000,
  paramsSerializer: params => {
    return qs.stringify(params, { encode: true });
  },
});

request.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error.response || error.message);
  },
);

request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const token = getRefreshToken();
    if (token && error?.response?.data?.statusCode === 401) {
      return refreshToken.then(response => {
        if (response?.data?.statusCode === 200) {
          setAccessToken(response.data.accessToken);
        }
      });
    }
    return Promise.reject(error.response.data || error.message);
  },
);
export default request;
