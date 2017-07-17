import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ({ pathname, user, logOut }) => {
  const path = pathname === '/favorites' ? '/' : '/favorites';
  const linkTitle = pathname === '/favorites' ? 'Home' : 'Favorites';

  if (Object.keys(user).length) {
    return (
      <div className="nav-link-container">
        <Link className='toggle-link nav-link' to={path}>{linkTitle}</Link>
        <a className="nav-link toggle-link" onClick={() => logOut()}>Logout</a>
     </div>
    )
  }

  return (
    <div className="nav-link-container">
      <Link className="nav-link signup-link" to="/signup">Sign Up</Link>
      <Link className="nav-link login-link" to="/login">Login</Link>
   </div>
  )
}
export default NavLinks;
