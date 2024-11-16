import React from 'react';
import ItemCard from '../shared/ItemCard';

const StorageItem = ({ title, amount, ga, total, imageUrl }) => {
  return (
    <ItemCard
      imageUrl={imageUrl}
      title={title}
      details={
        <>
          <p>Amount: {amount}</p>
          <p>g/A: {ga}</p>
          <p>Total g: {total}</p>
        </>
      }
    />
  );
};

export default StorageItem;
