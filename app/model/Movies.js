import Movie from './Movie';
import { getNowPlaying } from '../utils/constants';
import { movieFetchSuccess, moviesAreLoading } from '../action';

class Movies {
  fetchMovies() {
    return (dispatch) => {
      dispatch(moviesAreLoading(true))

      fetch(getNowPlaying(1))
      .then(res => {
        dispatch(moviesAreLoading(false))
        return res;
      })
      .then(res => res.json())
      .then(({ results }) => {
        const movies = results.map( movie => new Movie(movie))
        return dispatch(movieFetchSuccess(movies))
      });
    }
  }
}

export default Movies;
