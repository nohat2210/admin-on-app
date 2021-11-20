export const STORAGE_KEY = 'session-token';
export const REFRESH_TOKEN = 'refresh-token';
export const ACCESS_TOKEN = 'access-token';

export const getToken = () => localStorage.getItem(STORAGE_KEY) ?? '';
export const removeToken = () => localStorage.removeItem(STORAGE_KEY);
export const setToken = token => localStorage.setItem(STORAGE_KEY, token);

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN) ?? '';
export const removeRefreshToken = () => localStorage.removeItem(REFRESH_TOKEN);
export const setRefreshToken = refreshToken =>
  localStorage.setItem(REFRESH_TOKEN, refreshToken);

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
export const setAccessToken = accessToken =>
  localStorage.setItem(ACCESS_TOKEN, accessToken);
