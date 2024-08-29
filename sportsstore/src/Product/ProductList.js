import React from 'react';
import Product from './Product';
import './ProductList';

function ProductList() {
  const products = [
    {
      imageUrl: 'https://example.com/running-shoes.jpg',
      name: 'Running Shoes',
      description: 'High-performance running shoes for all terrains.',
      price: '79.99',
      rating: '4.7'
    },
    {
      imageUrl: 'https://example.com/basketball.jpg',
      name: 'Basketball',
      description: 'Professional-grade basketball for indoor and outdoor use.',
      price: '29.99',
      rating: '4.8'
    },
    {
      imageUrl: 'https://example.com/yoga-mat.jpg',
      name: 'Yoga Mat',
      description: 'Comfortable and non-slip yoga mat for all levels.',
      price: '24.99',
      rating: '4.6'
    },
    {
      imageUrl: 'https://example.com/tennis-racket.jpg',
      name: 'Tennis Racket',
      description: 'Lightweight tennis racket with enhanced grip.',
      price: '49.99',
      rating: '4.5'
    },
    {
      imageUrl: 'https://example.com/soccer-ball.jpg',
      name: 'Soccer Ball',
      description: 'Durable soccer ball with excellent flight stability.',
      price: '19.99',
      rating: '4.9'
    },
    {
      imageUrl: 'https://example.com/fitness-tracker.jpg',
      name: 'Fitness Tracker',
      description: 'Advanced fitness tracker with heart rate monitor.',
      price: '59.99',
      rating: '4.3'
    }
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product
          key={index}
          imageUrl={product.imageUrl}
          name={product.name}
          description={product.description}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
}

export default ProductList;
