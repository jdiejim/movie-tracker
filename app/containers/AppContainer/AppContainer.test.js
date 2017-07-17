import AppContainer             from './AppContainer';
import { API_KEY }              from '../../utils/api_key';
import {
  movieDataStub,
  user,
  favorites } from '../../utils/stubs';

import React                    from 'react';
import { mount }                from 'enzyme';
import { Provider }             from 'react-redux';
import { Route }                from 'react-router-dom'
import { ConnectedRouter }      from 'react-router-redux';
import configureMockStore       from 'redux-mock-store';
import fetchMock                from 'fetch-mock';
import createHistory            from 'history/createBrowserHistory';
import thunk                    from 'redux-thunk';


const history = createHistory()
history.location.pathname = 'http://localhost:3000/'
const loggedInStore   = configureMockStore([thunk])({movies:movieDataStub.results, user:user, favorites})
const loggedOutStore   = configureMockStore([thunk])({movies:movieDataStub.results, user: {}, favorites: []})


describe('AppContainer', () => {

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
          <Provider store={loggedInStore} >
            <ConnectedRouter history={history} >
              <Route to='/' history={history} component={AppContainer}/>
            </ConnectedRouter>
          </Provider>
    )
    // console.log(history)
    expect(wrapper.find('main').length).toEqual(1);
    console.log(wrapper.find('main').debug())


    // expect(wrapper.find('.nav-bar').props().children[1].props.onClick().type).toEqual('LOG_OUT')
    // expect(typeof wrapper.find('.nav-bar').props().children[1].props.onClick).toEqual('function')
  })
})
