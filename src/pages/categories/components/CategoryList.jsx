import React, { useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Switch, Modal } from 'antd';
import FilterFormCategory from './FilterFormCategory';
import CategoryForm from './CategoryForm';
import useGetCategories from 'shared/hooks/useGetCategories';
import useToggle from 'shared/hooks/useToggle';
import Table from 'shared/components/Table';
import DrawerComponent from 'shared/components/Drawer';

const CategoryList = () => {
  const [selectedItem, setSelectedItem] = useState();
  const { isVisible, onOpen, onClose } = useToggle(setSelectedItem);

  const {
    pageSize,
    currentPage,
    totalItems,
    onChangePagination,
    isLoading,
    categories,
    onFilters,
    createCategory,
    deleteCategory,
    updateCategory,
  } = useGetCategories();

  const COLUMNS = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: true,
    },
    {
      title: 'Type name',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      sorter: true,
    },
    {
      title: 'Active',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (_, record) => {
        return <Switch checked={record.isActive} />;
      },
      sorter: false,
    },
    {
      title: '',
      dataIndex: 'edit',
      key: 'edit',
      render: (_, record) => {
        const onEdit = () => {
          onOpen();
          setSelectedItem(record);
        };
        return (
          <Button onClick={onEdit} className="border-none">
            <EditOutlined />
          </Button>
        );
      },
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'delete',
      render: id => {
        const onDelete = async () => {
          Modal.confirm({
            title: 'Are you sure delete this category?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            async onOk() {
              await deleteCategory({ id });
            },
          });
        };
        return (
          <Button onClick={onDelete} className="border-none">
            <DeleteOutlined style={{ color: 'red' }} />
          </Button>
        );
      },
    },
  ];
  const onSubmit = async ({ id, name, description, isActive }) => {
    if (id) {
      await updateCategory({ id, name, description, isActive });
      setSelectedItem(null);
    } else {
      await createCategory({ name, description, isActive });
    }
    onClose();
  };
  return (
    <div className="p-5">
      <div className="flex spaced">
        <h4 className="border-bt tc">Categories ({totalItems}) </h4>
        <Button type="danger" onClick={onOpen}>
          Create
        </Button>
      </div>

      <div className="flex mt-5">
        <FilterFormCategory onSubmit={values => onFilters(values)} />
      </div>

      <Table
        rowKey="id"
        loading={isLoading}
        onHandleChange={onChangePagination}
        columns={COLUMNS}
        dataSource={categories}
        currentPage={currentPage}
        totalItems={totalItems}
        currentPageSize={pageSize}
      />
      {isVisible && (
        <DrawerComponent
          title={selectedItem ? 'Update Category' : 'Create Category'}
          isLoading={isLoading}
          visible={isVisible}
          onClose={onClose}
        >
          <CategoryForm
            onSubmit={onSubmit}
            onClose={onClose}
            isLoading={isLoading}
            selectedItem={selectedItem}
          />
        </DrawerComponent>
      )}
    </div>
  );
};

export default CategoryList;
