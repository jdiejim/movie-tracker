import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

  const navLinks = Object.keys(props.user).length ?
      <button>Logout</button> :
     (<div className="nav-link-container">
               <Link className="nav-link signup-link" to="/signup">Sign Up</Link>
               <Link className="nav-link login-link" to="/login">Login</Link>
            </div>
          )


  const username = <h3>usernamehere</h3>
  return (
    <header className="header">
      <nav className="nav-bar">
        <h3 className="nav-title">Movie <span>Tracker</span></h3>
        {navLinks}
      </nav>
    </header>
  )
}


export default Header;
