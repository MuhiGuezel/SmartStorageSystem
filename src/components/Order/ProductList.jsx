import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    {
      imageUrl: 'src/assets/nail.jpg',
    },
    {
      imageUrl: 'src/assets/nut.jpg',
    },
    {
      imageUrl: 'src/assets/screw.png',
    },
    {
      imageUrl: 'src/assets/product.png', // Replace with actual image
    },
  ];

  const handleOrder = (amount) => {
    alert(`You ordered ${amount} items!`);
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          imageUrl={product.imageUrl}
          onOrder={handleOrder}
        />
      ))}
    </div>
  );
};

export default ProductList;
