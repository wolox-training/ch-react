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
        message: action.payload.message,
        session: action.payload.session
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        message: action.payload.message,
        session: action.payload.session
      };
    case 'LOGOUT':
      return {
        ...state,
        session: action.payload.session
      };
    case 'TOKEN_EXISTS':
      return {
        ...state,
        session: action.payload.session
      };
    case 'TOKEN_NOT_EXISTS':
      return {
        ...state,
        session: action.payload.session
      };
    default:
      return state;
  }
};
