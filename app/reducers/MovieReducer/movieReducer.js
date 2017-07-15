const movieReducer = (state={}, action) => {
  switch (action.type){
    case 'DETAIL_FETCH_SUCCESS':
      return action.movie;
    default:
      return state;
  }
}

export default movieReducer;
