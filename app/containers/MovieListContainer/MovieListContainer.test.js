import MovieListContainer from './MovieListContainer';
import MovieList          from '../../components/MovieList/MovieList';
import * as actions       from '../../action';
import { movieDataStub }  from './stubs';
import { API_KEY }        from '../../utils/api_key'

import React              from 'react';
import ReactDOM           from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider }       from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { Route }          from 'react-router-dom'
import fetchMock          from 'fetch-mock'
import { ConnectedRouter } from 'react-router-redux';
import createHistory       from 'history/createBrowserHistory';

const history   = createHistory()
const store     = configureMockStore()({movies: 'a string'})

describe('MovieListContainer', () => {

  beforeEach( () => {
    fetchMock.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`, {
      status: 200,
      body: movieDataStub,
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


  it('should', async () => {

    const wrapper = mount(
          <Provider store={ store } >
            <ConnectedRouter history={ history } >
              <Route to='/' history={history} component={MovieListContainer}/>
            </ConnectedRouter>
          </Provider>
    )



    await resolveAfter2Seconds()

  })


})
