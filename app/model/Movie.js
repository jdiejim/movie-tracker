class Movie {
  constructor({ id, title, overview, release_date, poster_path, backdrop_path }) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.releaseDate = release_date;
    this.poster = poster_path;
    this.backdrop = backdrop_path;
  }
}

export default Movie;
