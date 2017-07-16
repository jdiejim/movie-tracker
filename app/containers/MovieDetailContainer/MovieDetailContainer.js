import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import { fetchMovieDetail } from '../../action';

const mapStateToProps = (state) => {
  return {
    movie: state.movieDetail,
    detailLoading: state.detailLoading,
    movieId: state.movieId,
  }
}

const mapDispatchToProps = (dispatch) => {
   return {
     fetchMovieDetail: (movieId) => dispatch(fetchMovieDetail(movieId)),
   }
}

// export default connect(null, null)(MovieDetail);
// export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetail));
