
import React, { useState, useEffect } from 'react';
import axios from '../api';
import styles from './MovieList.module.css'; 

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get('/movies');
        setMovies(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={styles.movieList}>
      <h2>Available Movies</h2>
      <ul className={styles.movieItems}>
        {movies.map((movie) => (
          <li key={movie._id} className={styles.movieItem}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Showtimes: {movie.showtimes.join(', ')}</p>
            <button className={styles.selectButton}>Select Movie</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
