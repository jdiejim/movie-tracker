import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should should render the correct components when it mounts', () => {
    const wrapper = shallow(<Header />)
  })
})
