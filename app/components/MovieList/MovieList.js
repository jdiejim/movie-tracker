import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoaded: false,
    }
  }

  componentDidMount(){
    this.props.fetchMovies();
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  //
  //   if (this.props.user !== nextProps.user) {
  //     this.setState({ userLoaded: !this.state.userLoaded })
  //   }
  // }

  render() {
    const { movies, isLoading, user, postFavorite } = this.props;

    if (isLoading) {
      return <div>loading...</div>
    }

    const moviesArray = movies.map(movie =>
      <MovieCard
        key={movie.id}
        movie={movie}
        user={user}
        postFavorite={postFavorite}
      />);

    return (
      <section className='movie-list'>
        {moviesArray}
      </section>
    )
  }
}
