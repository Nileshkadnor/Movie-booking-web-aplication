
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [screens, setScreens] = useState([]);
  const [screenData, setScreenData] = useState({
    name: '',
    seatCount: 0,
    seats: [],
  });
  const [menuItems, setMenuItems] = useState([]);
  const [newMenuItem, setNewMenuItem] = useState({
    name: '',
    price: 0,
  });

  
  useEffect(() => {
    fetchScreens();
    fetchMenuItems();
  }, []);

  const fetchScreens = async () => {
    try {
      const response = await axios.get('http://localhost:4000/admin/screens');
      setScreens(response.data);
    } catch (error) {
      console.error('Failed to fetch screens:', error);
     
    }
  };

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get('http://localhost:4000/admin/menu');
      setMenuItems(response.data);
    } catch (error) {
      console.error('Failed to fetch menu items:', error);
     
    }
  };

  const handleScreenSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/admin/screens', screenData);
      console.log('Screen added:', response.data);
     
      fetchScreens(); 
      setScreenData({
        name: '',
        seatCount: 0,
        seats: [],
      });
    } catch (error) {
      console.error('Failed to add screen:', error);
      
    }
  };

  const handleMenuSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/admin/menu', newMenuItem);
      console.log('Menu item added:', response.data);
      
      fetchMenuItems(); 
      setNewMenuItem({
        name: '',
        price: 0,
      });
    } catch (error) {
      console.error('Failed to add menu item:', error);
      
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Panel</h2>

      {}
      <form style={styles.form} onSubmit={handleScreenSubmit}>
        <h3>Add New Screen</h3>
        <input
          type="text"
          placeholder="Screen Name"
          value={screenData.name}
          onChange={(e) => setScreenData({ ...screenData, name: e.target.value })}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Seat Count"
          value={screenData.seatCount}
          onChange={(e) => setScreenData({ ...screenData, seatCount: e.target.value })}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Screen</button>
      </form>

      {}
      <div style={styles.listContainer}>
        <h3 style={styles.subHeading}>Screens</h3>
        <ul style={styles.list}>
          {screens.map((screen) => (
            <li key={screen.id} style={styles.listItem}>
              <h4>{screen.name}</h4>
              <p>Seat Count: {screen.seatCount}</p>
              {}
            </li>
          ))}
        </ul>
      </div>

      {}
      <form style={styles.form} onSubmit={handleMenuSubmit}>
        <h3>Add New Menu Item</h3>
        <input
          type="text"
          placeholder="Item Name"
          value={newMenuItem.name}
          onChange={(e) => setNewMenuItem({ ...newMenuItem, name: e.target.value })}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Price"
          value={newMenuItem.price}
          onChange={(e) => setNewMenuItem({ ...newMenuItem, price: e.target.value })}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Menu Item</button>
      </form>

      {}
      <div style={styles.listContainer}>
        <h3 style={styles.subHeading}>Menu Items</h3>
        <ul style={styles.list}>
          {menuItems.map((item) => (
            <li key={item.id} style={styles.listItem}>
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              {}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    marginRight: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    width: '200px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  listContainer: {
    marginBottom: '40px',
  },
  subHeading: {
    color: '#555',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
  },
};

export default AdminPanel;
