// Reducers

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        userName: action.payload,
      };
    case 'DELETE_USER':
      return {
        ...state,
        userName: action.payload,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        email: null,
        password: null,
      };
    default:
      return state;
  }
};

export default reducer;
