import React              from 'react';
import { shallow, mount } from 'enzyme';
import NavLinks           from './NavLinks';

describe('NavLinks', () => {
  it('should render the correct components when it mounts', () => {
    const wrapper = shallow(<NavLinks pathname='/' user={{}} />);

    expect(wrapper.find('.nav-link-container').length).toBe(1);
  });

  it('should render sign up and log in links when it mounts', () => {
    const wrapper = shallow(<NavLinks pathname='/' user={{}} />);
    const signup = wrapper.find('.signup-link');
    const login = wrapper.find('.login-link');

    expect(signup.length).toBe(1);
    expect(login.length).toBe(1);
  });

  it('should render favorites and logout link if sign in and in home path', () => {
    const wrapper = shallow(<NavLinks pathname='/' user={{ id: 1 }} />);
    const favorites = wrapper.find('.toggle-link').get(0).props.children;
    const logout = wrapper.find('.toggle-link').get(1).props.children;

    expect(favorites).toBe('Favorites');
    expect(logout).toBe('Logout');
  });

  it('should render home and logout link if sign in and in favorites path', () => {
    const wrapper = shallow(<NavLinks pathname='/favorites' user={{ id: 1 }} />);
    const home = wrapper.find('.toggle-link').get(0).props.children;
    const logout = wrapper.find('.toggle-link').get(1).props.children;

    expect(home).toBe('Home');
    expect(logout).toBe('Logout');
  });
});
