import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  if (cartItems.length === 0) return <div>Your cart is empty.</div>;

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <p>Total: ${totalPrice}</p>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;