import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Wishlist functionality can be added here
    console.log('Added to wishlist:', product.title);
  };

  const handleSelect = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <div className="wishlist-icon" onClick={handleWishlist}>
        ♥
      </div>
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-content">
        <h3>{product.title}</h3>
        <p className="product-price">{product.price.toLocaleString('vi-VN')}đ</p>
        <div className="product-actions">
          <button onClick={handleSelect} className="select-btn">
            CHỌN
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;