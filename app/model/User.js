import { signUp, logIn, userIsLoading, userLogInFail } from '../action';

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
}

export default User;
