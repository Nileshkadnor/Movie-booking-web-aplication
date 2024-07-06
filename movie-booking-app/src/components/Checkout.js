// frontend/src/components/Checkout.js
import React from 'react';
import styles from './Checkout.module.css'; // Import CSS module

const Checkout = ({ cartItems }) => {
  return (
    <div className={styles.checkout}>
      <h2>Checkout</h2>
      <ul className={styles.cartItems}>
        {cartItems.map((item) => (
          <li key={item._id} className={styles.cartItem}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <button className={styles.removeButton}>Remove</button>
          </li>
        ))}
      </ul>
      <button className={styles.checkoutButton}>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
