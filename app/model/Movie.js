import { getImageURL } from '../utils/constants';

export default class Movie {
  constructor({ id, title, overview, release_date, poster_path, backdrop_path, vote_average, movie_id }) {
    this.movie_id = movie_id || id;
    this.title = title;
    this.overview = overview;
    this.release_date = release_date;
    this.poster_path = poster_path;
    this.backdrop_path = backdrop_path;
    this.vote_average = vote_average;
  }
}
