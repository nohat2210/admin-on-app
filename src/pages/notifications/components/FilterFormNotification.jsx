import React from 'react';
import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import DatePicker from 'shared/components/DatePicker';

const NOTIFICATION_FORM = [
  {
    name: 'title',
    placeholder: 'Title',
  },
];

const NOTI_DATE = [
  {
    placeholder: 'Start Date',
    key: 'startDate',
  },
  {
    placeholder: 'End Date',
    key: 'endDate',
  },
];
const FilterFormNotification = ({ onSubmit }) => {
  const [form] = Form.useForm();

  return (
    <Form
      onFinish={onSubmit}
      layout="inline"
      form={form}
      className="spaced m-4"
    >
      {NOTIFICATION_FORM.map(item => (
        <Form.Item name={item.name} key={item.name}>
          <Input size="middle" placeholder={item.placeholder} allowClear />
        </Form.Item>
      ))}
      {NOTI_DATE.map(item => (
        <Form.Item name={item.key} key={item.key}>
          <DatePicker placeholder={item.placeholder} style={{ width: 194 }} />
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
FilterFormNotification.propTypes = {
  onSubmit: PropTypes.func,
};
export default FilterFormNotification;
