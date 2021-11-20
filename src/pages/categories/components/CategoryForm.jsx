import React from 'react';
import { Button, Form, Input, Switch } from 'antd';
import PropTypes from 'prop-types';

const { TextArea } = Input;
const CategoryForm = ({ onSubmit, onClose, isLoading, selectedItem }) => {
  const initialValues = {
    id: selectedItem?.id ?? '',
    name: selectedItem?.name ?? '',
    description: selectedItem?.description ?? '',
    isActive: selectedItem?.isActive ?? true,
  };
  return (
    <Form
      onFinish={onSubmit}
      layout="vertical"
      className="spaced"
      initialValues={initialValues}
    >
      <div>
        {!!selectedItem && (
          <Form.Item label="ID" name="id" hidden>
            <Input type="text" size="large" />
          </Form.Item>
        )}
        <Form.Item label="Type Name" name="name">
          <Input type="text" size="large" />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea type="text" rows={5} />
        </Form.Item>

        {selectedItem ? (
          <Form.Item label="Active" name="isActive">
            {selectedItem.isActive ? <Switch defaultChecked /> : <Switch />}
          </Form.Item>
        ) : (
          <Form.Item label="Active" name="isActive" hidden>
            <Input type="text" size="large" name="isActive" value />
          </Form.Item>
        )}
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
          {selectedItem ? 'Update' : 'Create'}
        </Button>
      </div>
    </Form>
  );
};
CategoryForm.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  isLoading: PropTypes.bool,
  selectedItem: PropTypes.objectOf(PropTypes.object),
};
export default CategoryForm;
