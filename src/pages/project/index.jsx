import React from 'react';
import { Breadcrumb } from 'antd';
import CardProject from './components/CardProject';
import PrivateLayout from 'layout/private/PrivateLayout';
import useRouter from 'shared/hooks/useRoutes';
import useGetProject from 'shared/hooks/useGetProject';

const ProjectDetail = () => {
  const { query } = useRouter();
  const project = useGetProject(query.id);
  return (
    <PrivateLayout>
      <Breadcrumb className="ml-7 t-600-20px-24px">
        <Breadcrumb.Item>Project</Breadcrumb.Item>
        <Breadcrumb.Item>Project detail</Breadcrumb.Item>
      </Breadcrumb>
      <div className="c-content">
        <CardProject item={project} />
      </div>
    </PrivateLayout>
  );
};
export default ProjectDetail;
