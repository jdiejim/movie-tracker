import React, { Component } from 'react';
import { getCarouselMovies, getCarouselClass } from '../../utils/constants';

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      carouselHistory: [],
      position: 0,
      intervalID: '',
      carouselAnimation: ''
    }

    this.handlePoster = this.handlePoster.bind(this);
    this.timer = this.timer.bind(this);
    this.removeInfoAnimation = this.removeInfoAnimation.bind(this);
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

    window.addEventListener('animationend',this.removeInfoAnimation);
    this.setState({ intervalID });
  }

  componentWillUnmount() {

    clearInterval(this.state.intervalID);
    window.removeEventListener('animationend', this.removeInfoAnimation);
  }

  removeInfoAnimation() {

    this.setState({ carouselAnimation: '' });
  }

  timer() {
    const carouselAnimation = 'carousel-anim';
    let { position } = this.state;

    position++;

    if (position === 3) {
      position = 0;
    }

    this.setState({ position, carouselAnimation });
  }

  handlePoster(e) {
    e.preventDefault();
    const position = +e.target.value;

    this.setState({ position });
    document.body.classList.add('carousel-anim');
  }

  render() {
    const { movies, location: { pathname } } = this.props;
    const { carouselHistory, position, carouselAnimation } = this.state;
    const carouselClass = getCarouselClass(pathname);
    const inputClass1 = position === 0 ? 'poster-selector selector-active' : 'poster-selector';
    const inputClass2 = position === 1 ? 'poster-selector selector-active' : 'poster-selector';
    const inputClass3 = position === 2 ? 'poster-selector selector-active' : 'poster-selector';

    if (!carouselHistory.length) {
      return <div>Loading carousel</div>
    }

    const { title, year, movieStyle, overview } = carouselHistory[position];

    return (
      <section className={`${carouselClass} ${carouselAnimation}`}>
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
