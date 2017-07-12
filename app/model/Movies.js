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
        return dispatch(movieFetchSuccess(results))
      });
    }
  }
}

export default Movies;
