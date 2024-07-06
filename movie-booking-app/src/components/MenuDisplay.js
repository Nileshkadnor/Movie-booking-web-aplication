
import React, { useState, useEffect } from 'react';
import axios from '../api';
import styles from './menumod.css'; 

const MenuDisplay = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const res = await axios.get('/menu'); 
        setMenuItems(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <div className={styles.menuDisplay}>
      <h2>Menu</h2>
      <ul className={styles.menuItems}>
        {menuItems.map((item) => (
          <li key={item._id} className={styles.menuItem}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuDisplay;
