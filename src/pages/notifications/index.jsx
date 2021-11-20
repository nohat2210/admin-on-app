import React from 'react';
import NotificationList from './components/NotificationList';
import PrivateLayout from 'layout/private/PrivateLayout';

const DashBoard = () => {
  return (
    <PrivateLayout>
      <div className="spaced flex" style={{ marginTop: '38px' }} />
      <div className="c-content">
        <NotificationList />
      </div>
    </PrivateLayout>
  );
};
export default DashBoard;
