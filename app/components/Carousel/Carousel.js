import React, { Component } from 'react';
import { getCarouselMovies } from '../../utils/constants';

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      carouselHistory: [],
      position: 0,
      intervalID: ''
    }

    this.handlePoster = this.handlePoster.bind(this);
    this.timer = this.timer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.movies.length !== nextProps.movies.length) {
     const { movies } = nextProps;
     const carouselHistory = getCarouselMovies(movies);

     this.setState({ carouselHistory });
    }
  }

  componentDidMount() {
    const intervalID = setInterval(this.timer, 4000);

    this.setState({ intervalID });
  }

  componentWillMount() {
    clearInterval(this.state.intervalID);
  }

  timer() {
    let { position } = this.state;

    position++;

    if (position === 3) {
      position = 0;
    }

    this.setState({ position });
  }

  handlePoster(e) {
    e.preventDefault();
    const position = +e.target.value;

    this.setState({ position });
  }

  render() {
    const { movies } = this.props;
    const { carouselHistory, position } = this.state;
    const inputClass1 = position === 0 ? 'poster-selector selector-active' : 'poster-selector';
    const inputClass2 = position === 1 ? 'poster-selector selector-active' : 'poster-selector';
    const inputClass3 = position === 2 ? 'poster-selector selector-active' : 'poster-selector';

    if (!carouselHistory.length) {
      return <div>Loading carousel</div>
    }

    const { title, year, movieStyle, overview } = carouselHistory[position];

    return (
      <section className="carousel">
        <article className="backdrop-poster" style={movieStyle}>
          <input className={inputClass1} onClick={this.handlePoster} type="submit" value="0" />
          <input className={inputClass2} onClick={this.handlePoster} type="submit" value="1" />
          <input className={inputClass3} onClick={this.handlePoster} type="submit" value="2" />
        </article>
        <article className="carousel-info-wrapper">
          <h1 className="carousel-title">
            {title}
            <span className="carousel-year"> ({year})</span>
          </h1>
          <p className="carousel-overview">{overview}</p>
        </article>
      </section>
    )
  }
}

export default Carousel;
