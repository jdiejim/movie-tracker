import React, { Component } from 'react';
import { getImageURL } from '../../utils/constants';
import { Link } from 'react-router-dom';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie, user, postFavorite, deleteFavorite, goToMovie } = this.props;
    const deleteBtn = deleteFavorite ? <button onClick={() => deleteFavorite(movie.movie_id, user.id)}>delete</button> : ''
    const styles = { backgroundImage: `url(${getImageURL(movie.poster_path)})`}
    return (
      <Link to='/detail'>

        <article className='movie-card' onClick={() => goToMovie(movie.movie_id)}>
          {
            Object.keys(user).length ?
            <button onClick={() => postFavorite(movie, user.id)} className='save-btn'>Save</button> :
            <Link to='/login' className='save-btn'>Save</Link>
          }
          <div className='sub-card' style={ styles }></div>
          <div className='movie-info'>
            Title
          </div>
          {deleteBtn}
        </article>
      </Link>
    )
  }
}
