import { GET_MOVIE_LIST } from '../../utils/constants';

const movieListReducer = (state={}, action) => {

  switch (action.type) {
    case GET_MOVIE_LIST:
      return state;

    default: return state;
  }
}
export default movieListReducer;
