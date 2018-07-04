import * as LoginService from '../../services/LoginService';
import * as LocalStorageService from '../../services/LocalStorageService';

export const actions = {
  loginUser: 'LOGIN_USER',
  loginSuccess: 'LOGIN_SUCCESS',
  loginError: 'LOGIN_ERROR',
  tokenExists: 'TOKEN_EXISTS',
  tokenNotExists: 'TOKEN_NOT_EXISTS'
};

export const privateActionCreators = {
  tokenExists: () => ({
    type: actions.tokenExists,
    payload: {
      session: true
    }
  }),
  tokenNotExists: () => ({
    type: actions.tokenNotExists,
    payload: {
      session: false
    }
  })
};

export const loginUser = () => ({
  type: actions.loginUser
});

export const loginSuccess = () => ({
  type: actions.loginSuccess,
  payload: {
    message: 'Login correct!'
  }
});

export const loginError = () => ({
  type: actions.loginError,
  payload: {
    message: 'Login error!'
  }
});

const actionCreators = {
  login: userAuth => async dispatch => {
    dispatch(loginUser());
    const userData = await LoginService.login();
    const user = userData.filter(
      userDatabase => userDatabase.email === userAuth.email && userDatabase.password === userAuth.password
    );
    if (user.length !== 0) {
      LocalStorageService.saveKey(user[0].token);
      return dispatch(loginSuccess());
    }
    return dispatch(loginError());
  },
  checkToken: () => async dispatch => {
    const token = LocalStorageService.getKey();
    return token
      ? dispatch(privateActionCreators.tokenExists())
      : dispatch(privateActionCreators.tokenNotExists());
  }
};

export default actionCreators;
