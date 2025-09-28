import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../styles/CartItem.css';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
      <input
        type="number"
        value={item.quantity}
        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
      />
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;