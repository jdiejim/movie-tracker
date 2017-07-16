import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  console.log(props);
    const toggleLink = props.location.pathname === '/favorites' ?
     <Link className='toggle-link nav-link' to="/">Home</Link> : <Link className='toggle-link nav-link'
       to="/favorites">Favorites</Link>
    const navLinks = Object.keys(props.user).length ?
      (<div className="nav-link-container">
       {toggleLink}
        <a className="nav-link toggle-link" onClick={() => props.logOut()}>Logout</a>
      </div>) :
     ( <div className="nav-link-container">
        <Link className="nav-link signup-link" to="/signup">Sign Up</Link>
        <Link className="nav-link login-link" to="/login">Login</Link>
       </div> )

  return (
    <header className="header">
      <nav className="nav-bar">
        <Link to="/" className="logo">
          <h3 className="logo-title">MOVIE</h3>
          <p className="logo-second-title">TRACKER</p>
        </Link>
        {navLinks}
      </nav>
    </header>
  )
}


export default Header;
