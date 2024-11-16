import React from 'react';
import ProductList from './ProductList';
import PageLayout from '../shared/PageLayout';

const OrdersPage = () => {
  return (
    <PageLayout title="Order Products">
      <ProductList />
    </PageLayout>
  );
};

export default OrdersPage;
