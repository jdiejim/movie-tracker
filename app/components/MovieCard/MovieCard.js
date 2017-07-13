import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { movie, user, postFavorite } = this.props;
    const styles = { backgroundImage: `url(${movie.poster_path})`}
    console.log(user.id);
    return(
      <article className='movie-card'>
        {
          Object.keys(user).length ?
          <button onClick={() => postFavorite(movie, user.id)} className='save-btn'>Save</button> :
          <Link to='/login' className='save-btn'>Save</Link>
        }
        <div className='sub-card' style={ styles }></div>
        <div className='movie-info'>
          Title
        </div>

      </article>
    )
  }
}
