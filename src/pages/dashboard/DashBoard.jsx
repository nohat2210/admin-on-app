import React from 'react';
import { Col, Row } from 'antd';
import Summary from './summary/Summary';
import UserList from './users/UserList';
import useGetUsers from 'shared/hooks/useGetUsers';
import FilterByPeriod from 'shared/components/FilterByPeriod';
import PrivateLayout from 'layout/private/PrivateLayout';

const DashBoard = () => {
  const {
    pageSize,
    currentPage,
    totalItems,
    onChangePagination,
    isLoading,
    users,
    onFilters,
    onChangePeriod,
    updateActive,
  } = useGetUsers();

  return (
    <PrivateLayout>
      <Row className="ml-7">
        <Col lg={24} xl={18}>
          <Summary />
        </Col>
        <Col lg={24} xl={6}>
          <FilterByPeriod onChange={onChangePeriod} />
        </Col>
      </Row>
      <div className="c-content">
        <UserList
          updateActive={updateActive}
          pageSize={pageSize}
          currentPage={currentPage}
          totalItems={totalItems}
          onChangePagination={onChangePagination}
          isLoading={isLoading}
          users={users}
          onFilters={onFilters}
        />
      </div>
    </PrivateLayout>
  );
};
export default DashBoard;
