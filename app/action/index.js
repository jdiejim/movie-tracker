import { GOTO_MOVIE, MOVIES_FETCH_SUCCESS, MOVIES_ARE_LOADING } from '../utils/constants';
import Movies from '../model/Movies';
import {getNowPlaying} from '../utils/constants'

export const goToMovie = (id) => {
  return { type: GOTO_MOVIE, id }
}

export const movieFetchSuccess = (movies) => {
  return { type: MOVIES_FETCH_SUCCESS, movies }
}

export const moviesAreLoading = (bool) => {
  return { type: MOVIES_ARE_LOADING, isLoading: bool }
}

export const fetchMovies = () => {
  return new Movies().fetchMovies()
}

export const signUp = (name, email, password) => {
  return {
           type: 'SIGN_UP',
           user: {name, email, password}
         }
}

export const logIn = (email, password) => {
  return {
           type: 'LOG_IN',
           user: {email, password}
         }
}
