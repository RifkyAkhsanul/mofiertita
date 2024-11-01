import React from 'react';

interface ProductCard {
  image: string;
  title: string;
}

const ProductCard: React.FC<ProductCard> = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={title} className="w-48 h-48 object-cover" />
      <p className="mt-4 text-lg font-medium text-secondary">{title}</p>
    </div>
  );
};

export default ProductCard;
