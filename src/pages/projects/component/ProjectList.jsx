import React from 'react';
import { Tooltip } from 'antd';
import { EyeTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Avatar from 'antd/lib/avatar/avatar';
import PropTypes from 'prop-types';
import FilterFormProject from './FilterFormProject';
import { textClass } from 'shared/components/common';
import Image from 'shared/components/Image';
import Table from 'shared/components/Table';
import defaultAvatar from 'assets/images/avatar.png';

const COLUMNS = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    render: id => <span>#{id}</span>,
    sorter: true,
  },
  {
    title: '',
    dataIndex: 'projectPhotos',
    key: 'projectPhotos',
    render: (_, record) => {
      return (
        <Image src={record.projectPhotos?.[0]?.url} width={55} height={36} />
      );
    },
  },
  {
    title: 'Project title',
    dataIndex: 'title',
    key: 'title',
    sorter: true,
  },
  {
    title: 'Short Description',
    dataIndex: 'shortDescription',
    key: 'shortDescription',
    sorter: true,
  },
  {
    title: 'Category',
    dataIndex: 'category.name',
    render: (_, record) => <p>{record.category?.name}</p>,
    key: 'category',
    sorter: true,
  },
  {
    title: 'Total Offer',
    dataIndex: 'cost',
    key: 'cost',
    render: cost => <span>${cost}</span>,
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
          src={record?.author.avatar || defaultAvatar}
          width={30}
          height={30}
        />
      );
    },
  },
  {
    title: 'Author',
    dataIndex: 'author.fullName',
    key: 'author',
    render: (_, record) => (
      <Link to={{ pathname: `/user/${record.author.id}` }}>
        <b className="c-primary">{record.author?.fullName}</b>
      </Link>
    ),
    sorter: true,
  },
  {
    title: 'Status',
    dataIndex: 'projectStatus.description',
    key: 'projectStatus',
    render: (_, record) => {
      const status = record.projectStatus.description;
      return <b className={textClass(status)}>{status}</b>;
    },
    sorter: true,
  },
  {
    title: '',
    key: 'action',
    render: (_, record) => (
      <Link to={{ pathname: `/project/${record.id}` }}>
        <Tooltip title="view">
          <EyeTwoTone />
        </Tooltip>
      </Link>
    ),
  },
];

const ProjectList = ({
  pageSize,
  currentPage,
  totalItems,
  onChangePagination,
  isLoading,
  projects,
  onFilters,
}) => {
  return (
    <div className="p-5">
      <h4 className="border-bt tc">Projects ({totalItems})</h4>
      <FilterFormProject onSubmit={values => onFilters(values)} />
      <Table
        rowKey="id"
        loading={isLoading}
        onHandleChange={onChangePagination}
        columns={COLUMNS}
        dataSource={projects}
        currentPage={currentPage}
        totalItems={totalItems}
        currentPageSize={pageSize}
      />
    </div>
  );
};

ProjectList.propTypes = {
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  onChangePagination: PropTypes.func,
  isLoading: PropTypes.bool,
  projects: PropTypes.arrayOf(PropTypes.object),
  onFilters: PropTypes.func,
};
export default ProjectList;
