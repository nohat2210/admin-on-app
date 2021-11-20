import React from 'react';
import { Col, Row } from 'antd';
import Summary from '../dashboard/summary/Summary';
import ProjectList from './component/ProjectList';
import FilterByPeriod from 'shared/components/FilterByPeriod';
import PrivateLayout from 'layout/private/PrivateLayout';
import useGetProjects from 'shared/hooks/useGetProjects';

const Project = () => {
  const {
    pageSize,
    currentPage,
    totalItems,
    onChangePagination,
    isLoading,
    projects,
    onFilters,
    onChangePeriod,
  } = useGetProjects();
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
        <ProjectList
          pageSize={pageSize}
          currentPage={currentPage}
          totalItems={totalItems}
          onChangePagination={onChangePagination}
          isLoading={isLoading}
          projects={projects}
          onFilters={onFilters}
        />
      </div>
    </PrivateLayout>
  );
};
export default Project;
