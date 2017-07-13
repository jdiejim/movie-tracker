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
    const { movies, isLoading } = this.props;

    if (isLoading) {
      return <div>loading...</div>
    }

    const moviesArray = movies.map(movie => <MovieCard key={movie.id} movie={movie} />);

    return (
      <section className='movie-list'>
        {moviesArray}
      </section>
    )
  }
}