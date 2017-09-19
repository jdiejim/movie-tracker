import React, { Component } from 'react';
import { getMovieDetail, getNowPlaying, getImageURL, getUpcoming } from '../../utils/constants';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import MovieListContainer from '../../containers/MovieListContainer/MovieListContainer';
import LogInPopUp from '../LogInPopUp/LogInPopUp';
import { Route, Switch } from 'react-router-dom';
import LogInPopUpContainer from '../../containers/LogInPopUpContainer/LogInPopUpContainer';
import MovieDetailContainer from '../../containers/MovieDetailContainer/MovieDetailContainer';
import CarouselContainer from '../../containers/CarouselContainer/CarouselContainer';


export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { location: { pathname } } = this.props;
    const appClass = pathname === '/login' || pathname === '/signup' ? 'bg-blur app' : 'app'
    return (
      <main className={appClass} >
        <Route path='/' component={HeaderContainer}/>
          <Route path="/" component={CarouselContainer} />
            <Route path='/signup' render={() => {
              return <LogInPopUp {...this.props} type='signup'/>
            }}/>
            <Route path='/login' render={() => {
              return <LogInPopUp {...this.props} type='login'/>
            }}/>
            <Route exact path='/favorites' component={MovieListContainer} />
            <Route path='/detail/:id' component={MovieDetailContainer} />
            <Route exact path='/' component={MovieListContainer} />
      </main>
    )
  }
}
