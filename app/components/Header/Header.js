import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../NavLinks/NavLinks';

const Header = ({ location: { pathname }, user, logOut }) => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <Link to="/" className="logo">
          <h3 className="logo-title">MOVIE</h3>
          <p className="logo-second-title">TRACKER</p>
        </Link>
        <NavLinks pathname={pathname} user={user} logOut={logOut} />
      </nav>
    </header>
  );
}

export default Header;
