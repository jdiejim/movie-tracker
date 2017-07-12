import React from 'react';

const MovieCard = ({ movie }) => {
console.log(movie)
const styles = { backgroundImage: `url(${movie.poster})`}
  return(
    <div className='movie-card'>
      <div className='sub-card' style={ styles } >
      </div>
      <div className='movie-info'>
        Title
      </div>

    </div>
  )
}

export default MovieCard;
