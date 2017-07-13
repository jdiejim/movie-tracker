import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
  return(
    <header className="header">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  )
}


export default Header;
