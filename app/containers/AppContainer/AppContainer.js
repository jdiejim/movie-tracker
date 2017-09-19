import { connect } from 'react-redux';
import { createNewUser, fetchLogInUser, userLogInSuccess } from '../../action';
import App from '../../components/App/App';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    userFail: state.userFail,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (body) => dispatch(createNewUser(body)),
    logIn: (body) => dispatch(fetchLogInUser(body)),
    userLogInSuccess: (bool) => dispatch(userLogInSuccess(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
