import React, { Component } from 'react';
import { getImageURL } from '../../utils/constants';
import { Link } from 'react-router-dom';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { movie: { movie_id }, movie, user, postFavorite, deleteFavorite, goToMovie } = this.props;
    const deleteBtn = deleteFavorite ? <button onClick={() => deleteFavorite(movie_id, user.id)}>delete</button> : ''
    const styles = { backgroundImage: `url(${getImageURL(movie.poster_path)})`}
    return (
      <article className='movie-card' onClick={() => goToMovie(movie.movie_id)}>
      <Link to={`/detail/${movie_id}`}>
        <div className='sub-card' style={ styles }></div>
        <div className='movie-card-info'>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      </Link>
      {deleteBtn}
      {
        Object.keys(user).length ?
        <button onClick={() => postFavorite(movie, user.id)} className='save-btn'>Save</button> :
        <Link to='/login' className='save-btn'>Save</Link>
      }
    </article>
    )
  }
}
