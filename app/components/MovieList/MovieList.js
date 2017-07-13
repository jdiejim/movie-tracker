import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchMovies();
  }

  render() {
    console.log();
    const { movies, isLoading, user } = this.props;

    if (isLoading) {
      return <div>loading...</div>
    }

    const moviesArray = movies.map(movie => <MovieCard key={movie.id} movie={movie} user={user} />);

    return (
      <section className='movie-list'>
        {moviesArray}
      </section>
    )
  }
}
