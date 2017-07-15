import React, { Component } from 'react';
import { getImageURL } from '../../utils/constants'

export default class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      movie: ''
    }
  }

  componentDidMount() {
    this.props.fetchMovieDetail()
  }

  render() {
    // console.log(this.props);
    if (this.props.detailLoading) {
      return <div>loading...</div>
    }

    const { title, poster_path, backdrop_path, overview } = this.props.movie
    const posterStyle = {
      backgroundImage: `url(${getImageURL(poster_path)})`,
    }

    const bannerStyle = {
      backgroundImage: `url(${getImageURL(backdrop_path)})`,
    }

    return (

      <section className='detail'>
        <banner className='detail-poster' style={posterStyle}></banner>
        <main className='detail-container'>
          <div className='detail-title' style={bannerStyle}>
            <h1>{title}</h1>
          </div>
          <div className='detail-info'>
            <p>Summary: {overview}</p>
          </div>
        </main>
      </section>
    )
  }
}
