
import React from 'react';

const BookingConfirmation = ({ movie, seats }) => {
    return (
        <div>
            <h2>Booking Confirmation</h2>
            <p>Movie: {movie.title}</p>
            <p>Seats: {seats.join(', ')}</p>
            <p>Showtime: {movie.showtimes[0]}</p>
        </div>
    );
};

export default BookingConfirmation;
