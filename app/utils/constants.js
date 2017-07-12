import { API_KEY } from './api_key';

// Get URL Fn
export const getMovieDetail = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
export const getImageURL = (imageURL) => `https://image.tmdb.org/t/p/w500/${imageURL}`;
export const getNowPlaying = (page) => `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`;
export const getUpcoming = (page) => `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;


// Actions
export const GOTO_MOVIE = 'GOTO_MOVIE';
export const MOVIES_FETCH_SUCCESS = 'MOVIES_FETCH_SUCCESS';
