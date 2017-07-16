import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom';

export default class MovieList extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    const { user: { id }, location: { pathname }, favorites, movies } = this.props;
    if (id) { this.props.fetchFavorites(id) }
    if (!movies.length) { this.props.fetchMovies() }
  }

  cardCreator(array) {
    const { movies, favorites, user, postFavorite, deleteFavorite, goToMovie } = this.props;

    return array.map(movie => {
      const favorite = favorites.filter(e => e.movie_id === movie.movie_id).length > 0;
        return (
          <MovieCard
            key={movie.movie_id}
            movie={movie}
            user={user}
            favorite={favorite}
            postFavorite={postFavorite}
            deleteFavorite={deleteFavorite}
            goToMovie={goToMovie}
          />
        )
    });
  }

  render() {
    const { isLoading, movies, favorites, location: {pathname} } = this.props;

    if (isLoading) {
      return <div>loading...</div>
    }

    const moviesArray = this.cardCreator(pathname === '/favorites' ? favorites : movies)

    return (
      <section className='movie-list-container'>
        <div className='movie-list'>
          {moviesArray}
        </div>
      </section>
    )
  }
}
