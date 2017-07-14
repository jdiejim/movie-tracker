export const userReducer = (state={}, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return action.body.user;
    case 'LOG_IN':
      return action.body.user;
    case 'LOG_OUT':
      return {};
    default:
      return state
  }
}

export const userFailReducer = (state=false, action) => {
  switch (action.type) {
    case 'USER_LOGIN_FAIL':
      return true

    default:
      return state
  }
}

export const addFavoriteReducer = (state=false, action) => {
  switch (action.type) {
    case 'ADD_SUCCESS':
      return true;
    default:
      return state;
  }
}

export const favoritesReducer = (state=[], action) => {
  switch (action.type) {
    case 'FAVORITES_FETCH_SUCCESS':
      return [...state, ...action.movies];
    default:
      return state;
  }
}
