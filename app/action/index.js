import { GOTO_MOVIE, MOVIES_FETCH_SUCCESS, MOVIES_ARE_LOADING } from '../utils/constants';
import Movies from '../model/Movies';
import User from '../model/User';
import { getNowPlaying } from '../utils/constants'

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

export const logIn = (body) => {
  return { type: 'LOG_IN', body }
}

export const signUp = (body) => {
  console.log(body);
  return { type: 'SIGN_UP', body }
}

export const userIsLoading = (bool) => {
  return { type: 'USER_IS_LOADING', userLoading: bool }
}
export const userLogInFail = (bool) => {
  return { type: 'USER_LOGIN_FAIL', userFail: bool }
}

export const createNewUser = (body) => {
  return new User().createUser(body)
}

export const fetchLogInUser = (body) => {
  return new User().logInUser(body)
}
