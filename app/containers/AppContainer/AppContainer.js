import { connect } from 'react-redux';
import { createNewUser } from '../../action';
import App from '../../components/App/App';

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (body) => dispatch(createNewUser(body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
