import React from 'react';
import { Form, Checkbox, Input } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RoundedButton } from 'shared/components/common';

const FormLogin = ({ onSubmit }) => {
  const isLoading = useSelector(state => state.auth.loading);

  return (
    <Form onFinish={onSubmit} layout="vertical">
      <Form.Item label="Email" name="email" rules={[{ required: true }]}>
        <Input type="email" size="large" />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true }]}>
        <Input.Password
          autoComplete="off"
          type="password"
          size="large"
          iconRender={visible =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Link to="/forgot-password" className="float-right">
          Forgot password?
        </Link>
      </Form.Item>
      <Form.Item>
        <RoundedButton
          htmlType="submit"
          block
          size="large"
          type="primary"
          loading={isLoading}
        >
          LOG IN
        </RoundedButton>
      </Form.Item>
    </Form>
  );
};
FormLogin.propTypes = {
  onSubmit: PropTypes.func,
};
export default FormLogin;
