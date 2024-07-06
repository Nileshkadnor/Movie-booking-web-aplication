
import React, { useState } from 'react';
import axios from '../api';
import styles from './FoodMenuManagement.module.css'; 

const FoodMenuManagement = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleCreateMenuItem = async () => {
    try {
      await axios.post('/menu', { name: itemName, description, price });
      alert('Menu item created successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to create menu item');
    }
  };

  const handleUpdateMenuItem = async (itemId) => {
    try {
      await axios.put(`/menu/${itemId}`, { name: itemName, description, price });
      alert('Menu item updated successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to update menu item');
    }
  };

  return (
    <div className={styles.foodMenuManagement}>
      <h2>Food Menu Management</h2>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handleCreateMenuItem}>Create Menu Item</button>
       // <button onClick={() => handleUpdateMenuItem(itemId)}>Update Menu Item</button>
      </div>
    </div>
  );
};

export default FoodMenuManagement;
