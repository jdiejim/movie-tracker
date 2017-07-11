import { connect } from 'react-redux';
import Carousel from '../../components/Carousel/Carousel';
import { goToMovie } from '../../action';

const mapStateToProps = (state) => {
  return {movieDetail: state.movieDetail}
}

const mapDispatchToProps = (dispatch) => {
  return {goToMovie: (id) => {
    dispatch(goToMovie(id))
  }}
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
