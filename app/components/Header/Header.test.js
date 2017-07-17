import React              from 'react';
import { shallow, mount } from 'enzyme';
import Header           from './Header';

describe('Header', () => {
  it('should render the correct components when it mounts', () => {
    const wrapper = shallow(<Header location={{ pathname: '/' }}/>);

    expect(wrapper.find('.header').length).toBe(1);
  });

  it('should render logo', () => {
    const wrapper = shallow(<Header location={{ pathname: '/' }}/>);

    expect(wrapper.find('.logo').length).toBe(1);
  });

  it('should render NavLinks', () => {
    const wrapper = shallow(<Header location={{ pathname: '/' }}/>);

    expect(wrapper.find('NavLinks').length).toBe(1);
  });
});
