import React from 'react';
import '../styles/Checkout.css';

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Credit Card" />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Checkout;