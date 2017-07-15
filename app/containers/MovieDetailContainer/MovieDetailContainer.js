import { connect } from 'react-redux';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import { fetchMovieDetail } from '../../action';

const mapStateToProps = (state) => {
  return {
    movie: state.movieDetail,
  }
}

const mapDispatchToProps = (dispatch) => {
   return {
     fetchMovieDetail: () => dispatch(fetchMovieDetail()),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
