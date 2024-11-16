import React, { useState } from 'react';
import ItemCard from '../shared/ItemCard';

const ProductCard = ({ title, imageUrl, onOrder }) => {
  const [amount, setAmount] = useState(1);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setAmount(isNaN(value) || value < 1 ? '' : value);
  };

  return (
    <ItemCard
      imageUrl={imageUrl}
      title={title}
      details={
        <>
          <h3 style={{ textAlign: 'center', marginTop: '10px' }}>{title}</h3>
          <input
            type="number"
            value={amount}
            onChange={handleInputChange}
            className="border border-purple-700 text-purple-700 px-2 py-1 rounded w-20 mb-4"
            placeholder="Amount"
            min="1"
          />
        </>
      }
      children={
        <button
          className="bg-purple-700 text-white px-4 py-2 rounded-lg shadow hover:shadow-lg hover:opacity-90 transition duration-300"
          onClick={() => onOrder(amount)}
          disabled={!amount}
        >
          Order
        </button>
      }
    />
  );
};

export default ProductCard;
