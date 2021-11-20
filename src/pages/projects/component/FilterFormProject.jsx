import React from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import StatusSelector from 'shared/selectors/StatusSelector';
import CategorySelector from 'shared/selectors/CategorySelector';

const PROJECT_FORM = [
  {
    name: 'title',
    placeholder: 'Project Title',
  },
  {
    name: 'author.fullName',
    placeholder: 'Author',
  },
];
const FilterFormProject = ({ onSubmit }) => {
  const [form] = Form.useForm();
  return (
    <Form onFinish={onSubmit} layout="inline" form={form} className="m-4">
      {PROJECT_FORM.map(item => (
        <Form.Item name={item.name} key={item.name}>
          <Input size="middle" placeholder={item.placeholder} allowClear />
        </Form.Item>
      ))}
      <Form.Item name="projectStatus.description">
        <StatusSelector />
      </Form.Item>
      <Form.Item name="category.name">
        <CategorySelector />
      </Form.Item>
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
FilterFormProject.propTypes = {
  onSubmit: PropTypes.func,
};
export default FilterFormProject;
