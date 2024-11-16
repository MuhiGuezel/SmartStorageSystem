import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    {
      title: 'Nail',
      imageUrl: 'src/assets/nail.jpg',
    },
    {
      title: 'Nut',
      imageUrl: 'src/assets/nut.jpg',
    },
    {
      title: 'Screw',
      imageUrl: 'src/assets/screw.png',
    },
    {
      title: 'Long Screw',
      imageUrl: 'src/assets/long_screw.jpeg', // Replace with actual image
    },
  ];

  const handleOrder = (amount) => {
    alert(`You ordered ${amount} items!`);
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      {products.map((product, index) => (
        <ProductCard
          title={product.title}
          key={index}
          imageUrl={product.imageUrl}
          onOrder={handleOrder}
        />
      ))}
    </div>
  );
};

export default ProductList;
