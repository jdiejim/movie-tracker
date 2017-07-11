import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
      <h1>This is Carousel</h1>
    )
  }
}

export default Carousel;
