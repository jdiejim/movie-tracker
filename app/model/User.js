import { signUp, userIsLoading } from '../action';

const createUser = (body) => {
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

export default createUser;
