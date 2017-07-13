import { connect } from 'react-redux';
import { createNewUser, fetchLogInUser } from '../../action';
import App from '../../components/App/App';

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (body) => dispatch(createNewUser(body)),
    logIn: (body) => dispatch(fetchLogInUser(body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
