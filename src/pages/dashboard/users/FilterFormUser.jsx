import React from 'react';
import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';

const USER_FORM = [
  {
    name: 'fullName',
    placeholder: 'Full Name',
  },
  {
    name: 'email',
    placeholder: 'Email',
  },
  {
    name: 'city',
    placeholder: 'City',
  },
  {
    name: 'country',
    placeholder: 'Country',
  },
];

const FilterFormUser = ({ onSubmit }) => {
  const [form] = Form.useForm();

  return (
    <Form onFinish={onSubmit} layout="inline" form={form} className="m-4">
      {USER_FORM.map(item => (
        <Form.Item name={item.name} key={item.name}>
          <Input size="middle" placeholder={item.placeholder} allowClear />
        </Form.Item>
      ))}

      <Form.Item>
        <Button htmlType="submit" type="danger" size="middle">
          Apply Filter
        </Button>
      </Form.Item>

      <Form.Item>
        <Button size="middle" onClick={() => form.resetFields()}>
          Clear Filter
        </Button>
      </Form.Item>
    </Form>
  );
};
FilterFormUser.propTypes = {
  onSubmit: PropTypes.func,
};
export default FilterFormUser;
