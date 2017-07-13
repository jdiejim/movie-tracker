import React from 'react';

const NavLinks = (props) => {
  return Object.keys(props.user).length ?
    <button>Logout</button> :
    (<div className="nav-link-container">
      <Link className="nav-link signup-link" to="/signup">Sign Up</Link>
      <Link className="nav-link login-link" to="/login">Login</Link>
    </div>
    )
}
export default NavLinks;
