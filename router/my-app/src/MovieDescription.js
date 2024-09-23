import React from 'react';

function MovieDescription({ movie }) {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe src={movie.trailerLink} frameborder="0" allowfullscreen></iframe>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default MovieDescription;
