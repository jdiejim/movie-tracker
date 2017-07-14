import Movie from './Movie';
import { signUp, logIn, userIsLoading, userLogInFail, addFavoriteSuccess, moviesAreLoading, favoritesFetchSuccess, deleteFavoriteSuccess } from '../action';

class User {
  createUser(body) {
    return (dispatch) => {
      dispatch(userIsLoading(true));

      fetch('/api/users/new', {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        dispatch(userIsLoading(false))
        return res;
      })
      .then(res => res.json())
      .then(data => dispatch(signUp(data)))
      .catch(err => console.log(err));
    }
  }

  logInUser(body) {
    return (dispatch) => {
      dispatch(userIsLoading(true));

      fetch('/api/users', {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        dispatch(userIsLoading(false))
        return res;
      })
      .then(res => res.json())
      .then(data => dispatch(logIn(data)))
      .catch(err => dispatch(userLogInFail(true)))
    }
  }

  addFavorite(movie, user_id) {
    return (dispatch) => {
      dispatch(userIsLoading(true))
      console.log(movie);

      fetch('/api/users/favorites/new', {
        method: 'POST',
        body: JSON.stringify(Object.assign({}, movie, {user_id})),
        headers: {'Content-Type': 'application/json'},
      })
      .then(res => {
        dispatch(userIsLoading(false))
        return res;
      })
      .then(res => res.json())
      .then(msg => dispatch(addFavoriteSuccess()))
      .catch(err => console.log(err))
    }
  }

  fetchFavorites(id) {
    return (dispatch) => {
      dispatch(moviesAreLoading(true))

      fetch(`/api/users/${id}/favorites`)
      .then(res => {
        dispatch(moviesAreLoading(false))
        return res;
      })
      .then(res => res.json())
      .then(({ data }) => {
        const movies = data.map( movie => new Movie(movie))
        return dispatch(favoritesFetchSuccess(movies))
      });
    }
  }

  deleteFavorite(movie_id, user_id) {
    return (dispatch) => {
      dispatch(userIsLoading(true))

      fetch(`/api/users/${user_id}/favorites/${movie_id}`, {
        method: 'DELETE',
      })
      .then(res => {
        dispatch(userIsLoading(false))
        return res;
      })
      .then(res => res.json())
      .then(msg => dispatch(deleteFavoriteSuccess(movie_id)))
      .catch(err => console.log(err))
    }
  }
}

export default User;
