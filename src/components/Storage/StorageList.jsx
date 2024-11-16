import React from 'react';
import StorageItem from './StorageItem';

const StorageList = () => {
  const storages = [
    {
      title: 'Storage 1',
      amount: 120,
      ga: 15,
      total: 1800,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Storage 2',
      amount: 200,
      ga: 10,
      total: 2000,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Storage 3',
      amount: 150,
      ga: 12,
      total: 1800,
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
      {storages.map((storage, index) => (
        <StorageItem
          key={index}
          title={storage.title}
          amount={storage.amount}
          ga={storage.ga}
          total={storage.total}
          imageUrl={storage.imageUrl}
        />
      ))}
    </div>
  );
};

export default StorageList;
