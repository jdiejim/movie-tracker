import React, { Component } from 'react';
import { getImageURL } from '../../utils/constants';
import { Link } from 'react-router-dom';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie: { movie_id },
            movie,
            user,
            postFavorite,
            deleteFavorite,
            goToMovie,
            favorite,
          } = this.props;
    const styles = { backgroundImage: `url(${getImageURL(movie.poster_path)})`}
    const saveBtn = favorite ?
      <button className='save-btn' onClick={() => deleteFavorite(movie_id, user.id)}>Remove</button> :
      <button className='save-btn' onClick={() => postFavorite(movie, user.id)}>Save</button>

    const btn = Object.keys(user).length ?
      saveBtn :
      <Link to='/login' className='save-btn'>Save</Link>

    return (
      <article className={`movie-card ${favorite ? 'favorite' : ''}`}>
      <Link to={`/detail/${movie_id}`}>
        <div className='sub-card' style={ styles }></div>
        <div className='movie-card-info'>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      </Link>
      {btn}
    </article>
    )
  }
}
