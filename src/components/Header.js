import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import '../styles/Header.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <header>
      <nav>
        <Link to="/" className="logo">🌿 Essential Oils</Link>
        <div className="nav-links">
          <Link to="/">Trang chủ</Link>
          <Link to="/products">Sản phẩm</Link>
          <Link to="/cart" className="cart-link">
            🛒 Giỏ hàng ({cartCount})
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;