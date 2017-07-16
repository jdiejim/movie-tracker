import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom';

export default class MovieList extends Component {
  constructor() {
    super();
  }
  //

  componentDidMount(){
    const { user: { id }, location: { pathname }, favorites, movies } = this.props;
    if (id) { this.props.fetchFavorites(id) }
    if (!movies.length) { this.props.fetchMovies() }
  }

  render() {
    let moviesArray;
    let toggleView;
    const { movies, isLoading, goToMovie, user, postFavorite, deleteFavorite, favorites, location: { pathname } } = this.props;

    if (isLoading) {
      return <div>loading...</div>
    }

    switch (pathname) {
      case '/favorites':
      toggleView = <Link className='toggle-link' to="/">Home</Link>
      moviesArray = favorites.map(movie =>
        <MovieCard
          favorite={true}
          deleteFavorite={deleteFavorite}
          key={movie.movie_id}
          movie={movie}
          user={user}
          postFavorite={postFavorite}
          goToMovie={goToMovie}
        />
      );
        break;
      default:
      toggleView = <Link className='toggle-link' to="/favorites">Favorites</Link>
      moviesArray = movies.map(movie => {
        const favorite = favorites.filter(e => e.movie_id === movie.movie_id).length > 0;
        return (
          <MovieCard
            favorite={favorite}
            key={movie.movie_id}
            movie={movie}
            user={user}
            postFavorite={postFavorite}
            goToMovie={goToMovie}
          />
        )
      });
    }

    return (
      <section className='movie-list-container'>
        <div className='movie-list'>
          {toggleView}
          {moviesArray}
        </div>
      </section>
    )
  }
}
