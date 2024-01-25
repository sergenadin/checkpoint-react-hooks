import React from 'react';
import MovieCard from './MovieCard';
const MovieList = ({ movies }) => {
  return (
    <div className='container d-flex flex-column align-items-center gap-2' >
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
