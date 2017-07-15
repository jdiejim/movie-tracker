import { GOTO_MOVIE, MOVIES_FETCH_SUCCESS, MOVIES_ARE_LOADING } from '../utils/constants';
import FetchCalls from '../model/FetchCalls';

export const goToMovie = (id) => {
  return { type: GOTO_MOVIE, id }
}

export const movieFetchSuccess = (movies) => {
  return { type: MOVIES_FETCH_SUCCESS, movies }
}

export const moviesAreLoading = (bool) => {
  return { type: MOVIES_ARE_LOADING, isLoading: bool }
}

export const detailLoading = (bool) => {
  return { type: 'DETAIL_IS_LOADING', isLoading: bool }
}

export const fetchMovieDetail = (movieId) => {
  return new FetchCalls().fetchMovieDetail(movieId)
}

export const detailFetchSuccess = (movie) => {
  return { type: 'DETAIL_FETCH_SUCCESS', movie}
}

export const fetchMovies = () => {
  return new FetchCalls().fetchMovies()
}

export const logIn = (body) => {
  return { type: 'LOG_IN', body }
}

export const logOut = () => {
  return { type: 'LOG_OUT'}
}

export const signUp = (body) => {
  return { type: 'SIGN_UP', body }
}

export const userIsLoading = (bool) => {
  return { type: 'USER_IS_LOADING', userLoading: bool }
}


export const userLogInFail = (bool) => {
  return { type: 'USER_LOGIN_FAIL', userFail: bool }
}

export const userLogInSuccess = (bool) => {
  return { type: 'USER_LOGIN_SUCCESS', userFail: bool }
}

export const createNewUser = (body) => {
  return new FetchCalls().createUser(body)
}

export const fetchLogInUser = (body) => {
  return new FetchCalls().logInUser(body)
}

export const addFavoriteSuccess = () => {
  return { type: 'ADD_SUCCESS' }
}

export const postFavorite = (movie, user_id) => {
  return new FetchCalls().addFavorite(movie, user_id);
}

export const favoritesFetchSuccess = (movies) => {
  return { type: 'FAVORITES_FETCH_SUCCESS', movies }
}

export const fetchFavorites = (id) => {
  return new FetchCalls().fetchFavorites(id)
}

export const deleteFavoriteSuccess = (movie_id) => {
  return { type: 'DELETE_FAVORITES_SUCCESS', movie_id }
}

export const deleteFavorite = (movie_id, user_id) => {
  return new FetchCalls().deleteFavorite(movie_id, user_id)
}
