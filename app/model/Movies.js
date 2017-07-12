import Movie from './Movie';
import { getNowPlaying } from '../utils/constants';

class Movies {
  fetchMovies(component) {
    fetch(getNowPlaying(1))
      .then(res => res.json())
      .then(({ results }) => component.setState({
        movies: results.map(movie => new Movie(movie))
      }));
  }
}

export default Movies;
