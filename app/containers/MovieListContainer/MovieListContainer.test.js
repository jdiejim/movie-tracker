import MovieListContainer       from './MovieListContainer';
import MovieList                from '../../components/MovieList/MovieList';
import { API_KEY }              from '../../utils/api_key'
import {
  movieDataStub,
  user,
  favorites }  from '../../utils/stubs';

import React                    from 'react';
import { mount }                from 'enzyme';
import { Provider }             from 'react-redux';
import { Route }                from 'react-router-dom'
import { ConnectedRouter }      from 'react-router-redux';
import configureMockStore       from 'redux-mock-store';
import fetchMock                from 'fetch-mock'
import createHistory            from 'history/createBrowserHistory';
import thunk                    from 'redux-thunk';


const history = createHistory()
const loggedInStore = configureMockStore([thunk])({
  movies: movieDataStub.results,
  user: user,
  favorites})

const loggedOutStore = configureMockStore([thunk])({
  movies: movieDataStub.results,
  user: {},
  favorites: []})


describe('MovieListContainer', () => {

  beforeEach( () => {
    fetchMock.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`, {
      status: 200,
      body: movieDataStub,
    })

    fetchMock.get(`/api/users/1/favorites`, {
      status: 200,
      body: favorites,
    })
  })

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  })

  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    })
  }


  it('should mount', () => {
    const wrapper = mount(
          <Provider store={loggedOutStore} >
            <ConnectedRouter history={history} >
              <Route to='' history={history} component={MovieListContainer}/>
            </ConnectedRouter>
          </Provider>
    )

    expect(wrapper.find('.movie-list').length).toEqual(1)
  })

  it('should render movie cards', () => {
    const wrapper = mount(
          <Provider store={loggedOutStore} >
            <ConnectedRouter history={history} >
              <Route to='' history={history} component={MovieListContainer}/>
            </ConnectedRouter>
          </Provider>
    )

    expect(wrapper.find('.movie-card').length).toEqual(2)
  })

  it('should have props passed in', () => {
    const wrapper = mount(
          <Provider store={loggedOutStore} >
            <ConnectedRouter history={history} >
              <Route to='/' history={history} component={MovieListContainer}/>
            </ConnectedRouter>
          </Provider>
    )

    const movieListComponent = wrapper.find('MovieList')

    expect(movieListComponent.prop('movies').length).toEqual(2)
    expect(movieListComponent.prop('favorites').length).toEqual(0)
    expect(movieListComponent.prop('user')).toEqual({})
  })

  it('should display a save button when the user is not logged in or has not favorited the movies', () => {
    const wrapper = mount(
          <Provider store={loggedOutStore} >
            <ConnectedRouter history={history} >
              <Route to='' history={history} component={MovieListContainer}/>
            </ConnectedRouter>
          </Provider>
    )

    const links = wrapper.find('.save-btn');
    links.forEach(node => {
      expect(node.text()).toBe('Save')
    })
  })

  it('should be able to add a movie to favorites when logged in', () => {
    const wrapper = mount(
          <Provider store={loggedInStore} >
            <ConnectedRouter history={history} >
              <Route to='' history={history} component={MovieListContainer}/>
            </ConnectedRouter>
          </Provider>
    )

    const links = wrapper.find('.save-btn');
    expect(links.at(0).text()).toBe('Remove')
    expect(links.at(1).text()).toBe('Save')
  })
})
