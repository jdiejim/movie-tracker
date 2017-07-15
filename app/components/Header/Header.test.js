import React              from 'react';
import { shallow, mount } from 'enzyme';
import Header             from './Header';
import ReactDOM           from 'react-dom';
import { Provider }       from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk              from 'redux-thunk';

describe('Header', () => {
  it('should should render the correct components when it mounts', () => {
    const middleware = [thunk]
    const mockStore = configureMockStore(middleware)

    const wrapper = mount(
      <Provider store={ mockStore } >
        <Header />
      </Provider>
    )
    console.log(wrapper )

  })
})
