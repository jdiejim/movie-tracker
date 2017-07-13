import React              from 'react';
import { shallow }        from 'enzyme';
import Header             from './Header';
import ReactDOM           from 'react-dom';
import { Provider }       from 'react-redux';
import configureMockStore from 'redux-mock-store';

describe('Header', () => {
  it('should should render the correct components when it mounts', () => {
    const wrapper = shallow(<Header />)
  })
})
