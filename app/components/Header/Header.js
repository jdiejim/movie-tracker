import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <h3 className="nav-title">Movie <span>Tracker</span></h3>
        <div className="nav-link-container">
          <Link className="nav-link login-link" to="/login">Login</Link>
          <Link className="nav-link signup-link" to="/signup">Sign Up</Link>
        </div>
      </nav>
    </header>
  )
}


export default Header;
