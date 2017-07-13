import MovieList from '../../components/MovieList/MovieList';
import { connect } from 'react-redux';
import { fetchMovies } from '../../action';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    isLoading: state.isLoading,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
