import { GOTO_MOVIE } from '../../utils/constants';

const movieReducer = (state={}, action) => {
  switch (action.type){
    case GOTO_MOVIE:
     return state;
    default: return state;
  }
}

export default movieReducer;
