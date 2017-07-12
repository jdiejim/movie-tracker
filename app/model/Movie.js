import { getImageURL } from '../utils/constants';

class Movie {
  constructor({ id, title, overview, release_date, poster_path, backdrop_path }) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.releaseDate = release_date;
    this.poster = getImageURL(poster_path);
    this.backdrop = getImageURL(backdrop_path);
  }
}

export default Movie;
