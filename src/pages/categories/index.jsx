import React from 'react';
import CategoryList from './components/CategoryList';
import PrivateLayout from 'layout/private/PrivateLayout';

const Category = () => {
  return (
    <PrivateLayout>
      <div className="spaced flex" style={{ marginTop: '38px' }} />
      <div className="c-content">
        <CategoryList />
      </div>
    </PrivateLayout>
  );
};
export default Category;
