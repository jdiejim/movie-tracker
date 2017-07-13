import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, user }) => {
const styles = { backgroundImage: `url(${movie.poster_path})`}
console.log(movie)
  return(
    <article className='movie-card'>
      {
        Object.keys(user).length ?
          <button className='save-btn'>Save</button> :
          <Link to='/login' className='save-btn'>Save</Link>
      }
      <div className='sub-card' style={ styles } >
      </div>
      <div className='movie-info'>
        Title
      </div>

    </article>
  )
}

export default MovieCard;
