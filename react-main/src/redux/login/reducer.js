const initialState = {
  message: '',
  session: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        message: action.message,
        session: action.session
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        message: action.message,
        session: action.session
      };
    case 'LOGOUT':
      return {
        ...state
      };
    case 'TOKEN_EXISTS':
      return {
        ...state,
        message: action.message,
        session: action.session
      };
    case 'TOKEN_NOT_EXISTS':
      return {
        ...state,
        session: action.session
      };
    default:
      return state;
  }
};
