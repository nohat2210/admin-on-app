import React from 'react';
import CardInfo from './components/CardInfo';
import MyProjectList from './components/MyProjectList';
import PrivateLayout from 'layout/private/PrivateLayout';
import useGetUser from 'shared/hooks/useGetUser';
import useRouter from 'shared/hooks/useRoutes';

const UserDetail = () => {
  const { query } = useRouter();
  const { user } = useGetUser(query.id);
  return (
    <PrivateLayout>
      <p className="ml-7 t-600-20px-24px">User Information</p>
      <CardInfo className="w-2/3" item={user} />
      <div className="c-content">
        <MyProjectList />
      </div>
    </PrivateLayout>
  );
};

export default UserDetail;
