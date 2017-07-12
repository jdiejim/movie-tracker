import React from 'react';
import CarouselContainer from '../../containers/CarouselContainer/CarouselContainer'


const Header = () => {
  return(
    <header className="header">
      <nav>
        <button>Login</button>
        <button>Submit</button>
      </nav>
      <CarouselContainer />
    </header>
  )
}


export default Header;
