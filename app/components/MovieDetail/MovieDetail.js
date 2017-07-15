import React, { Component } from 'react';

export default class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      detail: ''
    }
  }

  componentDidMount() {
    console.log('mounted')
    this.props.fetchMovieDetail()
  }

  render() {
    console.log(this.props);
          // backgroundImage: 'url(${imageurl})',
    const posterStyle = {

      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    }

    return (
      <section className='detail'>
        <banner className='detail-poster' style={posterStyle}>I'm the poster</banner>
        <main>
          <div className='detail-title'>I'm the title</div>
          <div className='detail-info'>I'm the info</div>
        </main>
      </section>
    )
  }
}
