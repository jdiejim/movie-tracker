import { GET_MOVIE_LIST } from '../../utils/constants';


const movieListReducer = (state={}, action) => {

  switch (action.type) {
    case GET_MOVIE_LIST:
    console.log(action.type);
      return state;
    default: return state;
  }
}
export default movieListReducer;
