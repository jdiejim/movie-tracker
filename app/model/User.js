import { signUp, logIn, userIsLoading, userLogInFail, addFavoriteSuccess } from '../action';

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
}

export default User;
