import React              from 'react';
import ReactDOM           from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider }       from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MovieList          from './MovieList';

describe('MovieList', () => {
  const mockStore = configureMockStore({"movies": [], "isLoading": false})
  // const wrapper = mount(
  //   <Provider store={ mockStore }>
  //     <MovieList />
  //   </Provider>
  // )

  it('should', () => {
    // const component = wrapper.find('')
    // console.log(wrapper.find(MvieList) )
  })
})
