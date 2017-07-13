import React, { Component } from 'react'

class LogInPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(e) {
    const input = e.target.value;
    const key = e.target.name;
    this.setState({[key]: input})
  }

  handleSubmit(e) {
    e.preventDefault();
    const { type, signUp, logIn } = this.props;
    if (type === 'signup') {
      signUp(JSON.stringify(this.state))
    } else {
      logIn(JSON.stringify(this.state))
    }

    this.props.history.push('/');
  }

  handleBlur() {
    this.props.history.push('/');
  }



  render() {
    const { type, signUp } = this.props;
    const title = type === 'signup' ? 'Sign Up' : 'Log In'
    const nameInput = type === 'signup' ? <input className='popup-input' onChange={ this.handleChange } type="text" name="name" placeholder="Enter name" /> : '';

    return (
      <div id='login' onBlur={this.handleBlur}>
        <h1 className='popup-title'>{ title }</h1>
        <button className='close-modal' onClick={ this.handleBlur }>close</button>
        <form className='login-popup' onSubmit={ this.handleSubmit }>
          { nameInput }
          <section className="popup-input-wrapper">
            <input className='popup-input' onChange={ this.handleChange } type="text" name="email" placeholder="Enter email" />
            <input className='popup-input' onChange={ this.handleChange } type="text" name="password" placeholder="Enter password" />
          </section>
          <button className='popup-login-btn' type="submit">{ title }</button>
        </form>
      </div>
    )
  }
}

export default LogInPopUp;
