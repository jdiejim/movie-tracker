<<<<<<< HEAD
import React              from 'react';
import ReactDOM           from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider }       from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MovieList          from './MovieList';


describe('MovieList', () => {
  const mockStore = createMockStore({"movies": [], "isLoading": false})
  const wrapper = mount(
    <Provider store={ mockStore }>
      <MovieList />
    </Provider>
  )

  it('should', () => {
    // const component = wrapper.find('')
    // console.log(wrapper.find(MvieList) )
  })
})
=======

>>>>>>> b3de619a3a30546290a3b1564850fdbc4727bbc1
