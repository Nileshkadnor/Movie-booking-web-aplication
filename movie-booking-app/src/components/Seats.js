import React, { useState } from 'react';
import axios from 'axios';

const Seats = ({ movie }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    
    const handleSeatSelect = (seat) => {
       
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    
    const handleSeatBooking = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/bookings', {
                movieId: movie._id,
                seats: selectedSeats
            });
            console.log(response.data); 
        } catch (error) {
            console.error('Booking error:', error);
           
        }
    };

    return (
        <div>
            <h2>Seats Selection for {movie.title}</h2>
            {}
            <div>
                {movie.seats.map(seat => (
                    <button
                        key={seat.id}
                        onClick={() => handleSeatSelect(seat)}
                        style={{ backgroundColor: selectedSeats.includes(seat) ? 'green' : 'grey' }}
                    >
                        {seat.name}
                    </button>
                ))}
            </div>
            <button onClick={handleSeatBooking}>Book Seats</button>
        </div>
    );
};

export default Seats;
