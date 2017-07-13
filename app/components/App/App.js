import React, { Component } from 'react';
import { getMovieDetail, getNowPlaying, getImageURL, getUpcoming } from '../../utils/constants';
import Movies from '../../model/Movies';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import MovieListContainer from '../../containers/MovieListContainer/MovieListContainer';
import LogInPopUp from '../LogInPopUp/LogInPopUp';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="app">
        <HeaderContainer/>
        <Route path='/signup' render={() => {
          return <LogInPopUp {...this.props} type='signup'/>
        }}/>
        <Route path='/login' render={() => {
          return <LogInPopUp {...this.props} type='login'/>
        }}/>
        <h1>Movie Watcher</h1>
        <MovieListContainer />
      </div>
    )
  }
}
