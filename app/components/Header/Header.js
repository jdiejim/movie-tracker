import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CarouselContainer from '../../containers/CarouselContainer/CarouselContainer';

const Header = (props) => {
  const navLinks = Object.keys(props.user).length ?
      <button onClick={() => props.logOut()}>Logout</button> :
     (<div className="nav-link-container">
               <Link className="nav-link signup-link" to="/signup">Sign Up</Link>
               <Link className="nav-link login-link" to="/login">Login</Link>
            </div>
          )

  return (
    <header className="header">
      <nav className="nav-bar">
        <h3 className="nav-title">Movie <span>Tracker</span></h3>
        {navLinks}
      </nav>
      <CarouselContainer />
    </header>
  )
}


export default Header;
