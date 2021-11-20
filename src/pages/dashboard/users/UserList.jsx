import React from 'react';
import { Switch, Avatar, Tooltip, Modal } from 'antd';
import { EyeTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FilterFormUser from './FilterFormUser';
import Table from 'shared/components/Table';
import defaultAvatar from 'assets/images/avatar.png';

const UserList = ({
  totalItems,
  pageSize,
  currentPage,
  onChangePagination,
  onFilters,
  users,
  isLoading,
  updateActive,
}) => {
  const COLUMNS = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: id => <span>#{id}</span>,
      sorter: true,
    },
    {
      title: '',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (_, record) => {
        return (
          <Avatar
            shape="circle"
            src={record?.avatar || defaultAvatar}
            width={30}
            height={30}
          />
        );
      },
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
      render: fullName => {
        return <p className="c-primary">{fullName}</p>;
      },
      sorter: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: true,
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      sorter: true,
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      sorter: true,
    },
    {
      title: 'Projects',
      dataIndex: 'totalProjects',
      key: 'project',
      align: 'center',
    },
    {
      title: 'Active',
      dataIndex: 'isEnable',
      key: 'isEnable',
      render: (_, record) => {
        const { id } = record;
        const changeActive = isEnable => {
          Modal.confirm({
            title: 'Do you want change active?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
              updateActive({ id, isEnable });
            },
          });
        };
        return <Switch onChange={changeActive} checked={record.isEnable} />;
      },
      sorter: false,
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => {
        return (
          <Link to={{ pathname: `/user/${record.id}` }}>
            <Tooltip title="view">
              <EyeTwoTone />
            </Tooltip>
          </Link>
        );
      },
      sorter: false,
    },
  ];
  return (
    <div className="p-5">
      <h4 className="border-bt tc">Users ({totalItems})</h4>
      <FilterFormUser
        onSubmit={values => {
          onFilters(values);
        }}
      />
      <Table
        rowKey="id"
        loading={isLoading}
        onHandleChange={onChangePagination}
        columns={COLUMNS}
        dataSource={users}
        currentPage={currentPage}
        totalItems={totalItems}
        currentPageSize={pageSize}
      />
    </div>
  );
};
UserList.propTypes = {
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  onChangePagination: PropTypes.func,
  isLoading: PropTypes.bool,
  users: PropTypes.arrayOf(PropTypes.object),
  onFilters: PropTypes.func,
  updateActive: PropTypes.func,
};
export default UserList;
