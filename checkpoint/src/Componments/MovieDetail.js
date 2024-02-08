import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { index } = useParams(); // Récupérer l'index du film à partir des paramètres d'URL
  const movie = movies[parseInt(index)]; // Récupérer le film correspondant à l'index

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <a href={movie.trailerURL} target="_blank" rel="noopener noreferrer">Voir la bande-annonce</a> {/* Lien vers la bande-annonce */}
      <br />
      <Link to="/">Retour à la page d'accueil</Link> {/* Lien pour retourner à la page d'accueil */}
    </div>
  );
};

export default MovieDetail;
