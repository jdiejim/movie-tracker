import React from 'react';

const MovieCard = ({ movie }) => {
const styles = { backgroundImage: `url(${movie.poster})`}
  return(
    <article className='movie-card'>
      <div className='sub-card' style={ styles } >
      </div>
      <div className='movie-info'>
        Title
      </div>

    </article>
  )
}

export default MovieCard;
