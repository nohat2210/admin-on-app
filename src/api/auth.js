import request from '../core/request';

export const login = ({ email, password }) =>
  request.post('auth/login', { email, password });

export const logout = () => request.post('auth/logout');

export const forgotPassword = ({ email }) =>
  request.post('auth/forgot-password', { email });

export const verifyForgotPasswordCode = ({ email, resetPasswordCode }) =>
  request.post('auth/verify-forgot-password-code', {
    email,
    resetPasswordCode,
  });

export const resetPassword = ({ newPassword, resetPasswordToken }) =>
  request.post('auth/reset-password', { newPassword, resetPasswordToken });

export const getMyProfile = () => request.get('users/me');

export const refreshToken = () => request.post('auth/refresh-token');
