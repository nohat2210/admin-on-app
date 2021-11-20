import React from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { Button } from 'antd';
import { forgotPass, verifyCode } from '../reducer';
import VerifyCodeForm from './VerifyCodeForm';
import { showError } from 'core/tools';
import useRouter from 'shared/hooks/useRoutes';
import AuthLayout from 'layout/auth/AuthLayout';

const VerifyCode = () => {
  const dispatch = useDispatch();
  const { history, location } = useRouter();
  const email = location.state;
  const onSubmit = async ({ resetPasswordCode }) => {
    dispatch(verifyCode({ email, resetPasswordCode }))
      .then(unwrapResult)
      .then(() => {
        history.push('/reset-password');
      })
      .catch(showError);
  };
  const onSendAgain = () => {
    dispatch(forgotPass({ email }));
  };
  return (
    <AuthLayout>
      <h2 className="t-400-25px-34px">Reset password</h2>
      <p>
        A code has been sent to your registered email, please open your inbox to
        check.
      </p>
      <VerifyCodeForm onSubmit={onSubmit} />
      <p>
        Haven’t received the code?
        <Button onClick={onSendAgain} className="border-none">
          <span className="c-primary"> Send it again</span>
        </Button>
      </p>
    </AuthLayout>
  );
};
export default VerifyCode;
