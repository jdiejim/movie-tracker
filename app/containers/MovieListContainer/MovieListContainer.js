import MovieList from '../../components/MovieList/MovieList';
import { connect } from 'react-redux';
import { fetchMovies, postFavorite, fetchFavorites, deleteFavorite, goToMovie } from '../../action';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    isLoading: state.isLoading,
    user: state.user,
    favorites: state.favorites,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    postFavorite: (movie, user_id) => dispatch(postFavorite(movie, user_id)),
    fetchFavorites: (id) => dispatch(fetchFavorites(id)),
    deleteFavorite: (movie_id, user_id) => dispatch(deleteFavorite(movie_id, user_id)),
    goToMovie: (movieId) => dispatch(goToMovie(movieId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
