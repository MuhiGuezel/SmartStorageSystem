import React from 'react';

const ItemCard = ({ imageUrl, title, details, children, productName}) => {
  return (
    <div className="bg-white text-purple-700 p-6 rounded-lg shadow-lg flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <img
        src={imageUrl}
        alt={title}
        className="w-32 h-32 object-cover rounded mb-4"
      />
      <div className="mb-4">{details}</div>
      {children && <div className="flex justify-center w-full">{children}</div>}
    </div>
  );
};

export default ItemCard;
