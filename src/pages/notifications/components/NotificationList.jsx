import React, { useState } from 'react';
import { Button } from 'antd';
import FilterFormNotification from './FilterFormNotification';
import NotificationForm from './NotificationForm';
import { formatDate } from 'shared/utils/date';
import DrawerComponent from 'shared/components/Drawer';
import Table from 'shared/components/Table';
import useGetNotifications from 'shared/hooks/useGetNotifications';

const COLUMNS = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: id => <span>#{id}</span>,
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: createdeAt => <span>{formatDate(createdeAt)}</span>,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Content',
    dataIndex: 'description',
    key: 'description',
  },
];

const NotificationList = () => {
  const [selectedItem, setSelectedItem] = useState(false);
  const {
    isLoading,
    totalItems,
    notifications,
    pageSize,
    currentPage,
    onChangePagination,
    onFilters,
    createNotification,
  } = useGetNotifications();

  const onSubmit = async ({ title, bodyText }) => {
    await createNotification({ title, bodyText });
    setSelectedItem(false);
  };
  return (
    <div className="p-5">
      <div className="flex spaced">
        <h4 className="border-bt tc">Notifications ({totalItems})</h4>
        <Button type="danger" onClick={() => setSelectedItem(true)}>
          Create
        </Button>
      </div>
      <div className="flex mt-5">
        <FilterFormNotification onSubmit={values => onFilters(values)} />
      </div>
      <Table
        rowKey="id"
        columns={COLUMNS}
        loading={isLoading}
        onHandleChange={onChangePagination}
        dataSource={notifications}
        currentPage={currentPage}
        totalItems={totalItems}
        currentPageSize={pageSize}
      />
      {selectedItem && (
        <DrawerComponent
          title="Create Notification"
          isLoading={isLoading}
          visible={selectedItem}
          onClose={() => setSelectedItem(false)}
        >
          <NotificationForm
            onSubmit={onSubmit}
            onClose={() => setSelectedItem(false)}
          />
        </DrawerComponent>
      )}
    </div>
  );
};
export default NotificationList;
