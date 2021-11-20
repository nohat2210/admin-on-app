import React from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';

const { TextArea } = Input;
const NotificationForm = ({ onSubmit, onClose, isLoading }) => {
  return (
    <Form onFinish={onSubmit} layout="vertical" className="spaced">
      <div>
        <Form.Item label="Title" name="title">
          <Input type="text" size="large" />
        </Form.Item>
        <Form.Item label="Description notification" name="bodyText">
          <TextArea type="text" rows={5} />
        </Form.Item>
      </div>
      <div className="justify-around mt-75">
        <Button className="w-half" onClick={onClose} type="ghost">
          Cancel
        </Button>
        <Button
          className="w-half"
          htmlType="submit"
          loading={isLoading}
          type="primary"
        >
          Create
        </Button>
      </div>
    </Form>
  );
};
NotificationForm.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  isLoading: PropTypes.bool,
};
export default NotificationForm;
