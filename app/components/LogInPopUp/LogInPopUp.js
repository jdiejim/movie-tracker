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

  render() {
    const { type, signUp } = this.props;
    const nameInput = type === 'signup' ? <input onChange={ this.handleChange } type="text" name="name" placeholder="Enter name" /> : '';

    return (
      <form onSubmit={ this.handleSubmit }>
        <h1>{ type }</h1>
        { nameInput }
        <input onChange={ this.handleChange } type="text" name="email" placeholder="Enter email" />
        <input onChange={ this.handleChange } type="text" name="password" placeholder="Enter password" />

        <button type="submit">{ type }</button>
      </form>
    )
  }
}

export default LogInPopUp;
