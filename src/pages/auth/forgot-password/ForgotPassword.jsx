import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { forgotPass } from '../reducer';
import ForgotPasswordForm from './ForgotPasswordForm';
import AuthLayout from 'layout/auth/AuthLayout';

const ForgotPassword = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async ({ email }) => {
    dispatch(forgotPass({ email }))
      .then(unwrapResult)
      .then(() => {
        history.push({
          pathname: '/verify-code',
          state: email,
        });
      });
  };
  return (
    <AuthLayout>
      <h2 className="t-400-25px-34px">Forgot password</h2>
      <p>Please enter your email address to get code login.</p>
      <ForgotPasswordForm onSubmit={onSubmit} />
    </AuthLayout>
  );
};
export default ForgotPassword;
