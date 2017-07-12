import React, { Component } from 'react';
import { getMovieDetail, getNowPlaying, getImageURL, getUpcoming } from '../../utils/constants';
import Movies from '../../model/Movies';
import Header from '../Header/Header'
import MovieListContainer from '../../containers/MovieListContainer/MovieListContainer';

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="app">
        <Header/>
        <h1>Movie Watcher</h1>
        <MovieListContainer />
      </div>
    )
  }
}
