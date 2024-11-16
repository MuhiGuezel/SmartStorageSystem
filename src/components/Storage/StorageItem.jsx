import React from 'react';
import ItemCard from '../shared/ItemCard';

const StorageItem = ({ title, amount, ga, total, imageUrl, productName }) => {
  return (
    <ItemCard
      imageUrl={imageUrl}
      title={title}
      details={
        <>
          <h2>Item: {productName}</h2>
          <p>Amount: {amount}</p>
          <p>g/A: {ga}</p>
          <p>Total g: {total}</p>
        </>
      }
    />
  );
};

export default StorageItem;
