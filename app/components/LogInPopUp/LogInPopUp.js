import React, { Component } from 'react'
const getUserId = require('uuid/v4');

class LogInPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    }

    this.handleNameOnChange = this.handleNameOnChange.bind(this);
    this.handleEmailOnChange = this.handleEmailOnChange.bind(this);
    this.handlePasswordsOnChange = this.handlePasswordsOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameOnChange(e) {
    const name = e.target.value;

    this.setState({ name });
  }

  handleEmailOnChange(e) {
    const email = e.target.value;

    this.setState({ email })
  }

  handlePasswordsOnChange(e) {
    const password = e.target.value;

    this.setState({ password })
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
    const { type, signUp } = this.props;

    signUp(JSON.stringify(this.state));
  }

  logIn() {
    const { email, password } = this.state;
    const body = JSON.stringify({ email, password });

    fetch("/api/users", {
      method: "POST",
      body,
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  signUp() {
    const { name, email, password } = this.state;
    const body = JSON.stringify({ name, email, password });

    fetch("/api/users/new", {
      method: "POST",
      body,
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  render() {
    const { type } = this.props;
    const nameInput = type === 'signup' ? <input onChange={this.handleNameOnChange} type="text" name="name" placeholder="Enter name" /> : '';

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{type}</h1>
        {nameInput}
        <input onChange={this.handleEmailOnChange} type="text" name="email" placeholder="Enter email" />
        <input onChange={this.handlePasswordsOnChange} type="text" name="password" placeholder="Enter password" />
        <button type="submit">{type}</button>
      </form>
    )
  }
}

export default LogInPopUp;
