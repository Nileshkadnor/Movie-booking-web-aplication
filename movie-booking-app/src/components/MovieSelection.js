
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieSelection.css';

function MovieSelection() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('http://localhost:5000/api/movies');
      setMovies(response.data);
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-selection">
      <h2>Available Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <p>{movie.showtimes.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieSelection;
