import React from 'react';
import { Tooltip } from 'antd';
import { EyeTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import FilterFormProject from 'pages/projects/component/FilterFormProject';
import { textClass } from 'shared/components/common';
import useGetMyProjects from 'shared/hooks/useGetMyProjects';
import Table from 'shared/components/Table';
import Image from 'shared/components/Image';
import useRouter from 'shared/hooks/useRoutes';

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
        <Image src={record?.projectPhotos?.[0]?.url} width={55} height={36} />
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
    title: 'Author',
    dataIndex: 'author.fullName',
    key: 'author',
    render: (_, record) => (
      <p className="c-primary">{record.author?.fullName}</p>
    ),
    sorter: true,
  },
  {
    title: 'Status',
    dataIndex: 'projectStatus.description',
    key: 'projectStatus',
    render: (_, record) => {
      const status = record.projectStatus.description;
      return (
        <div>
          <b className={textClass(status)}>{status}</b>
        </div>
      );
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
const MyProjectList = () => {
  const { query } = useRouter();
  const {
    pageSize,
    currentPage,
    totalItems,
    onChangePagination,
    isLoading,
    userProjects,
    onFilters,
  } = useGetMyProjects(query.id);
  return (
    <div className="p-5">
      <h4 className="border-bt tc">Project Owner({totalItems})</h4>
      <FilterFormProject onSubmit={values => onFilters(values)} />
      <Table
        rowKey="id"
        loading={isLoading}
        onHandleChange={onChangePagination}
        columns={COLUMNS}
        dataSource={userProjects}
        currentPage={currentPage}
        totalItems={totalItems}
        currentPageSize={pageSize}
      />
    </div>
  );
};
export default MyProjectList;
