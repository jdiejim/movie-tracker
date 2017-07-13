const userReducer = (state={}, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return state;
    case 'LOG_IN':
      return state;
    default: return state
  }
}
export default userReducer;
