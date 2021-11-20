import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { unwrapResult } from '@reduxjs/toolkit';
import { resetNewPassword } from '../reducer';
import ResetPasswordForm from './ResetPasswordForm';
import { showError, showInfo, showSuccess } from 'core/tools';
import AuthLayout from 'layout/auth/AuthLayout';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const resetPasswordToken = useSelector(
    state => state.auth.resetPasswordToken,
  );
  const onSubmit = async ({ newPassword, confirmNewPassword }) => {
    if (newPassword === confirmNewPassword) {
      dispatch(resetNewPassword({ newPassword, resetPasswordToken }))
        .then(unwrapResult)
        .then(() => {
          showSuccess('Your password has been changed successfully');
          history.push('/login');
        })
        .catch(showError);
    } else {
      showInfo('Your password and confirm password not match!');
    }
  };
  return (
    <AuthLayout>
      <h2 className="t-400-25px-34px">Reset password</h2>
      <p>Please enter your new password and confirm new password to reset</p>
      <ResetPasswordForm onSubmit={onSubmit} />
    </AuthLayout>
  );
};
export default ResetPassword;
