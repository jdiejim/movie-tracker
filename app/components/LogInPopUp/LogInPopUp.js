import React, { Component } from 'react';
import { getErrorSetup } from '../../utils/constants';

class LogInPopUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      disabled: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleBlur);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleBlur)
  }

  componentWillReceiveProps(np) {
    if(np.userFail === this.props.userFail) {
      np.userLogInSuccess(false);
      np.history.push('/');
    }
  }

  handleBlur(e) {
    const { history, userLogInSuccess } = this.props;
    const { nodeName } = e.target;
    switch (nodeName) {
      case 'MAIN':
        history.push('/');
        userLogInSuccess(false);
        break;
      case 'A':
        userLogInSuccess(false);
        break;
    }
  }

  handleChange(e) {
    const input = e.target.value;
    const key = e.target.id;
    const disabled = this.handleDisabled();

    this.setState({ [key]: input, disabled });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { type, signUp, logIn, user } = this.props;

    if (type === 'signup') {
      signUp(JSON.stringify(this.state));
    } else {
      logIn(JSON.stringify(this.state));
    }

    this.setState({ name: '', email: '', password: '' });
  }

  handleDisabled() {
    const { emailInput, nameInput, passwordInput } = this;
    const { type } = this.props;
    let disabled = emailInput.value.length && passwordInput.value.length ? false : true;

    if (type === 'signup') {
      disabled = emailInput.value.length && passwordInput.value.length && nameInput.value.length ? false : true;
    }
    return disabled;
  }

  render() {
    const { name, email, password, disabled } = this.state;
    const { type, userFail } = this.props;
    const { errorMsg, errorClass } = getErrorSetup(userFail, type);
    const title = type === 'signup' ? 'Sign Up' : 'Log In';
    const btnClass = disabled ? 'popup-login-btn disabled-btn' : 'popup-login-btn';
    const nameInput = type === 'signup' ?
    <input
      ref={(input) => this.nameInput = input}
      id="name"
      className='popup-input'
      onChange={ this.handleChange }
      type="text"
      name="name"
      placeholder="Enter name"
      value={name}
    /> : '';

    return (
      <div id='login' className={errorClass} >
        <h1 className='popup-title'>{title}</h1>
        <form className='login-popup' onSubmit={this.handleSubmit}>
          <section className="popup-input-wrapper">
            {nameInput}
            <input ref={(input) => this.emailInput = input} id="email" className='popup-input' onChange={this.handleChange} type="email" name="email" placeholder="Enter email" value={email} />
            <input ref={(input) => this.passwordInput = input} id="password" className='popup-input' onChange={this.handleChange} type="text" name="password" placeholder="Enter password" value={password} />
          </section>
          {errorMsg}
          <button className={btnClass} type="submit" disabled={disabled}>{title}</button>
        </form>
      </div>
    )
  }
}

export default LogInPopUp;
