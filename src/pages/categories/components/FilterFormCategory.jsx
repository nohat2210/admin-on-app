import React from 'react';
import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';

const CATEGORY_FORM = [
  {
    name: 'name',
    placeholder: 'Type Name',
  },
  {
    name: 'description',
    placeholder: 'Description',
  },
];

const FilterFormCategory = ({ onSubmit }) => {
  const [form] = Form.useForm();

  return (
    <Form
      onFinish={onSubmit}
      layout="inline"
      form={form}
      className="spaced m-4"
    >
      {CATEGORY_FORM.map(item => (
        <Form.Item name={item.name} key={item.name}>
          <Input size="middle" placeholder={item.placeholder} allowClear />
        </Form.Item>
      ))}
      <div className="flex">
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
      </div>
    </Form>
  );
};
FilterFormCategory.propTypes = {
  onSubmit: PropTypes.func,
};
export default FilterFormCategory;
