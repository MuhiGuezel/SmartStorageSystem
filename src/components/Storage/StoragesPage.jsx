import React from 'react';
import StorageList from './StorageList';
import PageLayout from '../shared/PageLayout';

const StoragesPage = () => {
  return (
    <PageLayout title="Storages">
      <StorageList />
    </PageLayout>
  );
};

export default StoragesPage;
