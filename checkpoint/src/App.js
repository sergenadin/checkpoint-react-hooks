import React, { useState } from 'react';
import Filtre from './Componments/Filtre';
import MovieList from './Componments/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
  {
      title: 'Designated Survivor',
      description: 'Un membre du gouvernement américain peu expérimenté devient président des États-Unis après une attaque catastrophique et meurtrière le projetant en première place dans la ligne de succession.',
      posterURL: 'https://www.imdb.com/video/vi3992632345/?playlistId=tt5296406&ref_=tt_ov_vi',
      rating: '4.5'
    },
    {
      title: 'La Casa De Papel Season 1',
      description: 'Une série espagnole de braquage où un groupe de criminels tente de voler la Monnaie royale d\'Espagne.',
      posterURL: 'https://www.imdb.com/video/vi2646786841/?playlistId=tt6468322&ref_=tt_pr_ov_vi',
      rating: '4.8'
    },
    {
      title: 'Vikings Season 1',
      description: 'Une série historique qui raconte les exploits d\'un groupe de Vikings dirigés par Ragnar Lothbrok.',
      posterURL: 'https://www.imdb.com/video/vi3370435865/?playlistId=tt11311302&ref_=tt_pr_ov_vi',
      rating: '4.7'
    },
    {
      title: 'The Last Kingdom',
      description: 'Une série basée sur les romans de Bernard Cornwell, se déroulant pendant la montée de la Grande Armée Viking.',
      posterURL: 'https://www.imdb.com/video/vi81247769/?playlistId=tt4179452&ref_=tt_ov_vi',
      rating: '4.6'
    },
  ]);
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  const handleFilterChange = (title, rating) => {
    setFilterTitle(title);
    setFilterRating(rating);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating.includes(filterRating)
  );

  return (
    <div className='container p-5 text-center'>
      <h1 className='mb-4'>Cinéma App</h1>
      <Filtre filterTitle={filterTitle} filterRating={filterRating} onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />

      <div className='mt-5'>
        <h2>Ajouter un nouveau film</h2>
        <form>
          <div className='form-group'>
            <label>Titre:</label>
            <input type="text" value={newMovie.title} className='form-control' onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} />
          </div>

          <div className='form-group'>
            <label>Description:</label>
            <input type="text" value={newMovie.description} className='form-control' onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} />
          </div>

          <div className='form-group'>
            <label>URL de l'affiche:</label>
            <input type="text" value={newMovie.posterURL} className='form-control' onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })} />
          </div>

          <div className='form-group'>
            <label>Note:</label>
            <input type="text" value={newMovie.rating} className='form-control' onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })} />
          </div>

          <button type="button" onClick={handleAddMovie} className='btn btn-dark'>Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default App;
