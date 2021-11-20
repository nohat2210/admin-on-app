import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { loginAuth } from '../reducer';
import FormLogin from './FormLogin';
import AuthLayout from 'layout/auth/AuthLayout';
import { showError, showSuccess } from 'core/tools';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async ({ email, password }) => {
    dispatch(loginAuth({ email, password }))
      .then(unwrapResult)
      .then(() => {
        history.push('/');
        showSuccess('Login successfully');
      })
      .catch(showError);
  };
  return (
    <AuthLayout>
      <h2 className="t-400-25px-34px">log in</h2>
      <FormLogin onSubmit={onSubmit} />
    </AuthLayout>
  );
};
export default Login;
