import { getBackDropImageStyle, getYear } from '../utils/constants';

class CarouselMovie {
  constructor(movie) {
    this.title = movie.title;
    this.year = getYear(movie);;
    this.overview = movie.overview;
    this.movieStyle = getBackDropImageStyle(movie);
  }
}

export default CarouselMovie;
