import { SIGN_UP, LOG_IN, LOG_OUT, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, FAVORITES_FETCH_SUCCESS, DELETE_FAVORITES_SUCCESS, ADD_SUCCESS } from '../../utils/constants';

export const userReducer = (state={}, action) => {
  switch (action.type) {
    case SIGN_UP:
      return action.body.user;
    case LOG_IN:
      return action.body.user;
    case LOG_OUT:
      return {};
    default:
      return state
  }
}

export const userFailReducer = (state=false, action) => {
  switch (action.type) {
    case USER_LOGIN_FAIL:
      return action.userFail
    case USER_LOGIN_SUCCESS:
      return action.userFail
    default:
      return state
  }
}

export const favoritesReducer = (state=[], action) => {
  switch (action.type) {
    case FAVORITES_FETCH_SUCCESS:
      return [...action.movies];
    case DELETE_FAVORITES_SUCCESS:
      return [...state].filter(movie => movie.movie_id !== action.movie_id)
    case ADD_SUCCESS:
      return [...state, action.favorite]
    default:
      return state;
  }
}
