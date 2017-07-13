import MovieList from '../../components/MovieList/MovieList';
import { connect } from 'react-redux';
import { fetchMovies, postFavorite } from '../../action';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    isLoading: state.isLoading,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    postFavorite: (movie, user_id) => dispatch(postFavorite(movie, user_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
