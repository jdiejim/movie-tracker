import MovieListContainer       from './MovieListContainer';
import { API_KEY }              from '../../utils/api_key'
import { movieDataStub, user }  from '../../utils/stubs';

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
const store   = configureMockStore([thunk])({movies:movieDataStub.results, user:user})


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


  it('should mount', () => {
    const wrapper = mount(
          <Provider store={store} >
            <ConnectedRouter history={history} >
              <Route to='' history={history} component={MovieListContainer}/>
            </ConnectedRouter>
          </Provider>
    )

    expect(wrapper.find('.movie-list').length).toEqual(1)
  })

  it.only('should render movie cards', () => {
    const wrapper = mount(
          <Provider store={store} >
            <ConnectedRouter history={history} >
              <Route to='' history={history} component={MovieListContainer}/>
            </ConnectedRouter>
          </Provider>
    )

    expect(wrapper.find('.movie-card').length).toEqual(2)
  })

  it.only('should have props passed in', () => {
    const wrapper = mount(
          <Provider store={store} >
            <ConnectedRouter history={history} >
              <Route to='' history={history} component={MovieListContainer}/>
            </ConnectedRouter>
          </Provider>
    )
    console.log(wrapper.props())
    // expect(wrapper.find('.movie-card').length).toEqual(2)
  })

  it('should redirect to login when the favorites button is clicked and the user is not logged in', () => {
    const wrapper = mount(
          <Provider store={store} >
            <ConnectedRouter history={history} >
              <Route to='' history={history} component={MovieListContainer}/>
            </ConnectedRouter>
          </Provider>
    )
  })

  it('should be able to add a movie to favorites', () => {
    const wrapper = mount(
          <Provider store={store} >
            <ConnectedRouter history={history} >
              <Route to='' history={history} component={MovieListContainer}/>
            </ConnectedRouter>
          </Provider>
    )
  })
})
