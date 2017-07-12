import React, { Component } from 'react';
import { getMovieDetail, getNowPlaying, getImageURL, getUpcoming } from '../../utils/constants';
import Movies from '../../model/Movies';
import Header from '../Header/Header'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    new Movies().fetchMovies(this)

  }

  render() {
    return (
      <div className="app">
        <Header/>
        <img src={this.state.image} />
        <h1>Movie Watcher</h1>
      </div>
    )
  }
}
