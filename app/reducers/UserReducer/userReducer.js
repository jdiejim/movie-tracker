const userReducer = (state='', action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return state;
    case 'LOG_IN':
      return action.id;
    default:
      return state
  }
}
export default userReducer;
