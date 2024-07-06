import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScreenManagement = () => {
    const [screens, setScreens] = useState([]);

    useEffect(() => {
        const fetchScreens = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/screens');
                setScreens(response.data.screens);
            } catch (error) {
                console.error('Error fetching screens:', error);
            }
        };

        fetchScreens();
    }, []);

    const handleAddScreen = async () => {
       
    };

    const handleDeleteScreen = async (screenId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/screens/${screenId}`);
            console.log(response.data); 
        } catch (error) {
            console.error('Delete screen error:', error);
        }
    };

    return (
        <div>
            <h2>Screen Management</h2>
            <button onClick={handleAddScreen}>Add Screen</button>
            <ul>
                {screens.map((screen) => (
                    <li key={screen._id}>
                        {screen.name} - {screen.capacity} seats
                        <button onClick={() => handleDeleteScreen(screen._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScreenManagement;
