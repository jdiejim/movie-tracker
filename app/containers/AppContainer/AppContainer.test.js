import AppContainer             from './AppContainer';
import { API_KEY }              from '../../utils/api_key';
import { movieDataStub, user }  from '../../utils/stubs';

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
const store   = configureMockStore([thunk])({movies:movieDataStub.results, user:user})


describe('AppContainer', () => {

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
              <Route to='/' history={history} component={AppContainer}/>
            </ConnectedRouter>
          </Provider>
    )

    // await resolveAfter2Seconds()

    expect(wrapper.find('.nav-bar').props().children[1].props.onClick().type).toEqual('LOG_OUT')
    expect(typeof wrapper.find('.nav-bar').props().children[1].props.onClick).toEqual('function')
  })
})
