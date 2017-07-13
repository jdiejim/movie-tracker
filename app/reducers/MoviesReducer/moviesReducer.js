import { MOVIES_FETCH_SUCCESS, MOVIES_ARE_LOADING } from '../../utils/constants';

export const moviesSuccessReducer = (state=[], action) => {
  switch (action.type) {
    case MOVIES_FETCH_SUCCESS :
      return [...state, ...action.movies];
    default:
      return state;
  }
}

export const moviesAreLoadingReducer = (state=false, action) => {
  switch (action.type) {
    case MOVIES_ARE_LOADING:
      return action.isLoading
    default:
      return state;
  }
}
