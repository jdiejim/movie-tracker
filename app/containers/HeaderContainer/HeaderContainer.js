import { connect} from 'react-redux';
import Header from '../../components/Header/Header';
import {signUp, logIn } from '../../action'

const mapStateToProps = (state) => {
  return {movies: state.movies}
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (name, email, password) => dispatch(signUp(name, email, password)),
    logIn: (email, password) => dispatch(logIn(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
