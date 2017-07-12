import { GOTO_MOVIE, MOVIES_FETCH_SUCCESS } from '../utils/constants';
import Movies from '../model/Movies';
import {getNowPlaying} from '../utils/constants'

export const goToMovie = (id) => {
  return {type: GOTO_MOVIE, id}
}

export const movieFetchSuccess = (movies) => {
  return {type: MOVIES_FETCH_SUCCESS, movies}
}

export const moviesAreLoading = (bool) => {
  return {type: 'MOVIES_ARE_LOADING', isLoading: bool}
}

export const fetchMovies = () => {
  return new Movies().fetchMovies()
}
