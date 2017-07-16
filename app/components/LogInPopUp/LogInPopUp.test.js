import React              from 'react';
import { shallow, mount } from 'enzyme';
import LogInPopUp         from './LogInPopUp';
import ReactDOM           from 'react-dom';
import { Provider }       from 'react-redux';
import configureMockStore from 'redux-mock-store';

describe('LogInPopUp', () => {
  it('should render the correct components when it mounts', () => {
    const wrapper = shallow(<LogInPopUp type='login' />);

    expect(wrapper.find('#login').length).toBe(1);
  });

  it('should NOT render name input field when type login', () => {
    const wrapper = shallow(<LogInPopUp type='login' />);

    expect(wrapper.find('#name').length).toBe(0);
  });

  it('should render name input field when type signup', () => {
    const wrapper = shallow(<LogInPopUp type='signup' />);

    expect(wrapper.find('#name').length).toBe(1);
  });

  it('should have a default state', () => {
    const expected = {
      name: '',
      email: '',
      password: '',
      disabled: true
    };
    const wrapper = shallow(<LogInPopUp type='signup' />);

    expect(wrapper.state()).toEqual(expected);
  });

  it('should let us change name state when onChange is trigger in the correct input', () => {
    const wrapper = mount(<LogInPopUp type='signup' />);
    const value = 'John Smith';
    const nameInput = wrapper.find('#name');

    expect(wrapper.state('name')).toBe('');

    nameInput.simulate('change', { target: { value, id: 'name' } });

    expect(wrapper.state('name')).toBe('John Smith');
  });

  it('should let us change email state when onChange is trigger in the correct input', () => {
    const wrapper = mount(<LogInPopUp type='signup' />);
    const value = 'john@smith.com';
    const emailInput = wrapper.find('#email');

    expect(wrapper.state('email')).toBe('');

    emailInput.simulate('change', { target: { value, id: 'email' } });

    expect(wrapper.state('email')).toBe('john@smith.com');
  });

  it('should let us change password state when onChange is trigger in the correct input', () => {
    const wrapper = mount(<LogInPopUp type='signup' />);
    const value = '1234';
    const passwordInput = wrapper.find('#password');

    expect(wrapper.state('password')).toBe('');

    passwordInput.simulate('change', { target: { value, id: 'password' } });

    expect(wrapper.state('password')).toBe('1234');
  });

  it('should change disabled state to false if all inputs have a value in login', () => {
    const wrapper = mount(<LogInPopUp type='login' />);
    const email = 'john@smith.com';
    const password = '1234';
    const emailInput = wrapper.find('#email');
    const passwordInput = wrapper.find('#password');

    expect(wrapper.state('disabled')).toBe(true);

    emailInput.simulate('change', { target: { value: email, id: 'email' } });

    expect(wrapper.state('disabled')).toBe(true);

    passwordInput.simulate('change', { target: { value: password, id: 'password' } });
    passwordInput.simulate('change', { target: { value: '', id: 'password' } });

    expect(wrapper.state('disabled')).toBe(false);
  });

  it('should change disabled state to false if all inputs have a value in signup', () => {
    const wrapper = mount(<LogInPopUp type='signup' />);
    const name = 'John Smith';
    const email = 'john@smith.com';
    const password = '1234';
    const emailInput = wrapper.find('#email');
    const passwordInput = wrapper.find('#password');
    const nameInput = wrapper.find('#name');

    expect(wrapper.state('disabled')).toBe(true);

    nameInput.simulate('change', { target: { value: name, id: 'name' } });

    expect(wrapper.state('disabled')).toBe(true);

    emailInput.simulate('change', { target: { value: email, id: 'email' } });

    expect(wrapper.state('disabled')).toBe(true);

    passwordInput.simulate('change', { target: { value: password, id: 'password' } });
    passwordInput.simulate('change', { target: { value: '', id: 'password' } });

    expect(wrapper.state('disabled')).toBe(false);
  });

  it('should display the correct error message if user response fails on login', () => {
    const wrapper = mount(<LogInPopUp type='login' userFail='true' />);
    const expected = 'Email or password not valid';
    const errorMsg = wrapper.find('.login-error-msg').props().children;

    expect(errorMsg).toBe(expected);
  });

  it('should display the correct error message if user response fails on signup', () => {
    const wrapper = mount(<LogInPopUp type='signup' userFail='true' />);
    const expected = 'Email already exists';
    const errorMsg = wrapper.find('.login-error-msg').props().children;

    expect(errorMsg).toBe(expected);
  });

  it('should trigger signup function on form submit', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<LogInPopUp type='signup' signUp={mockFn} />);
    const form = wrapper.find('form');

    form.simulate('submit');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should trigger loging function on form submit', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<LogInPopUp type='login' logIn={mockFn} />);
    const form = wrapper.find('form');

    form.simulate('submit');

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
})
