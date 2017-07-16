import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CarouselContainer from '../../containers/CarouselContainer/CarouselContainer';

const Header = (props) => {
  console.log(props);
    const toggleLink = props.match.params.id === 'favorites' ?
     <Link className='toggle-link nav-link' to="/">Home</Link> : <Link className='toggle-link nav-link'
       to="/favorites">Favorites</Link>
    const navLinks = Object.keys(props.user).length ?
      (<div className="nav-link-container">
       {toggleLink}
        <button className="nav-link" onClick={() => props.logOut()}>Logout</button>
      </div>) :
     ( <div className="nav-link-container">
        <Link className="nav-link signup-link" to="/signup">Sign Up</Link>
        <Link className="nav-link login-link" to="/login">Login</Link>
       </div> )

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
