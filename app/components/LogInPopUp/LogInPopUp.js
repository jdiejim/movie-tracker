import React, { Component } from 'react'

class LogInPopUp extends Component {
  constructor(props) {
    super(props);
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


  componentWillReceiveProps(np) {
    console.log('np', np);
    console.log('props', this.props);
    if(np.userFail === this.props.userFail) {
      np.userLogInSuccess(false);
      np.history.push('/');
    }
  }

  handleChange(e) {
    const input = e.target.value;
    const key = e.target.name;
    this.setState({[key]: input})
    this.handleDisabled()
  }

  handleSubmit(e) {
    e.preventDefault();
    const { type, signUp, logIn, user } = this.props;
    if (type === 'signup') {
      signUp(JSON.stringify(this.state))
    } else {
      logIn(JSON.stringify(this.state))
    }
    this.setState({name: '', email: '', password: ''} )
  }

  handleDisabled() {
    const { type } = this.props;
    let { disabled, name, email, password } = this.state
    console.log(this.state);
    switch(type) {
      case 'login':
        if ( email !== '' && password !== '') {
          disabled = false;
        } else {
          disabled = true;
        }
      case 'signup':
        if ( name === '' && email === '' && password === '' ) {
          disabled = true;
        } else {
          disabled = false;
        }
      // default:
        // disabled = 'Im here';
    }
    console.log(email);
    console.log(disabled);
    this.setState({disabled})
  }

  handleBlur() {
    this.props.history.push('/');
  }



  render() {
    const  { name, email, password, disabled } = this.state
    const { type, signUp, userFail } = this.props;
    const title = type === 'signup' ? 'Sign Up' : 'Log In'
    const nameInput = type === 'signup' ? <input id="name" className='popup-input' onChange={ this.handleChange } type="text" name="name" placeholder="Enter name" value={name} /> : '';
    const errorMsg = userFail ? <p className="login-error-msg">Email or password not valid</p> : null;

    return (
      <div id='login' >
        <h1 className='popup-title'>{ title }</h1>
        <button className='close-modal' onClick={ this.handleBlur }>close</button>
        <form className='login-popup' onSubmit={ this.handleSubmit }>
          { nameInput }
          <section className="popup-input-wrapper">
            <input ref={(input) => this.emailInput = input} id="email" className='popup-input' onChange={ this.handleChange } type="email" name="email" placeholder="Enter email" value={email} />
            <input id="password" className='popup-input' onChange={ this.handleChange } type="text" name="password" placeholder="Enter password" value={password} />
          </section>
          {errorMsg}
          <button className='popup-login-btn' type="submit" disabled={disabled}>{ title }</button>
        </form>
      </div>
    )
  }
}

export default LogInPopUp;
