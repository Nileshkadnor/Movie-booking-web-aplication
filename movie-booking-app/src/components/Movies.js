import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = ({ onMovieSelect }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/movies');
                setMovies(response.data.movies);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    const handleSelect = (movie) => {
        onMovieSelect(movie);
       
    };

    return (
        <div>
            <h2>Movies</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie._id} onClick={() => handleSelect(movie)}>
                        {movie.title} - {movie.genre} ({movie.showtimes.join(', ')})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;
