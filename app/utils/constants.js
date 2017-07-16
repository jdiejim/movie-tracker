import React from 'react';
import CarouselMovie from '../model/CarouselMovie';
import { API_KEY } from './api_key';

// Get URL Fn
export const getMovieDetail = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
export const getImageURL = (imageURL) => `https://image.tmdb.org/t/p/w500/${imageURL}`;
export const getNowPlaying = (page) => `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`;
export const getUpcoming = (page) => `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;
export const getCast = (id) => `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;


// Actions
export const GOTO_MOVIE = 'GOTO_MOVIE';
export const MOVIES_FETCH_SUCCESS = 'MOVIES_FETCH_SUCCESS';
export const MOVIES_ARE_LOADING = 'MOVIES_ARE_LOADING';


// Helper functions
export const getBackDropImageStyle = (movie) => {
  const backdrop = getImageURL(movie.backdrop_path);

  return { backgroundImage: `url(${backdrop})` };
}

export const getYear = (movie) => {
  return [...movie.release_date].reduce((str, c, i) => {
    if (i < 4) { str += c }
    return str;
  }, '');
}

export const getRandNumber = (n) => Math.floor(Math.random() * n);


export const getArrayofNumbers = (array=[]) => {
  if (array.length > 2) {
    return array;
  }

  const num = getRandNumber(20);

  if (!array.includes(num)) {
    array.push(num);
  }

  return getArrayofNumbers(array);
}

export const getCarouselMovies = (movies) => {
  return getArrayofNumbers().map(n => new CarouselMovie(movies[n]));
}

// Error helpers
export const getErrorSetup = (bool, type) => {
  const errorClass = bool ? 'login-error' : '';
  const errorMsgText = type === 'signup' ? 'Email already exists' : 'Email or password not valid';
  const errorMsg = bool ? <p className="login-error-msg">{errorMsgText}</p> : null;

  return { errorMsg, errorClass };
}
