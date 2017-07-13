import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  console.log(props);
  return(
    <header className="header">
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </nav>
    </header>
  )
}


export default Header;
