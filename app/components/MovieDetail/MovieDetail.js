import React, { Component } from 'react';
import { getImageURL } from '../../utils/constants'

export default class MovieDetail extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    const { fetchMovieDetail, match: { params: { id }} } = this.props;
    fetchMovieDetail(id);
  }

  render() {
    if (!Object.keys(this.props.movie).length) {
      return <div>loading...</div>
    }

    const {
      title,
      poster_path,
      backdrop_path,
      overview,
      tagline,
      release_date,
      vote_average,
      popularity,
      cast: { cast },
    } = this.props.movie;

    const posterStyle = {
      backgroundImage: `url(${getImageURL(poster_path)})`,
    }

    const fullCast =  cast.map(character => {
      return (
        <li className='detail-row'>
          <img
            className='detail-cast-img'
            src={
              character.profile_path ?
                getImageURL(character.profile_path) :
                '../../assets/Character_Placeholder.png'
            }
          />
          <div>
            <p>Character: { character.character }</p>
            <p>Name: { character.name }</p>
          </div>
        </li>
      )
    });


    return (
      <div className="detail-cover">
        <section className='detail'>
          <banner className='detail-poster' style={ posterStyle }></banner>

          <main className='detail-container'>
            <div className='detail-title'>
              <header className='detail-header'>
                <h1>{ title } ({ release_date })</h1>
                <ul className='detail-rating'>
                  <li>Average Rating: { vote_average }</li>
                  <li>Popularity: { parseInt(popularity) }</li>
                </ul>
              </header>
              <h3>{ tagline }</h3>
            </div>
            <div className='detail-info'>
              <article className='detail-summary'>
                <h3>Summary: </h3>
                <p>{ overview }</p>
              </article>
              <h3>Full Cast</h3>
              <ul>
                { fullCast }
              </ul>
            </div>
          </main>
        </section>
      </div>
    )
  }
}
