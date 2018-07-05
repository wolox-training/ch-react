import * as LoginService from '../../services/LoginService';
import * as LocalStorageService from '../../services/LocalStorageService';

export const actions = {
  loginUser: 'LOGIN_USER',
  loginSuccess: 'LOGIN_SUCCESS',
  loginError: 'LOGIN_ERROR',
  logout: 'LOGOUT',
  tokenExists: 'TOKEN_EXISTS',
  tokenNotExists: 'TOKEN_NOT_EXISTS'
};

export const tokenExists = user => ({
  type: actions.tokenExists,
  message: `Welcome ${user.email}`,
  session: true
});

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
  }),
  logout: () => ({
    type: actions.logout,
    payload: {
      session: false
    }
  }),
  loginUser: () => ({
    type: actions.loginUser
  }),
  loginSuccess: () => ({
    type: actions.loginSuccess,
    payload: {
      message: 'Login correct!',
      session: true
    }
  }),
  loginError: () => ({
    type: actions.loginError,
    payload: {
      message: 'Login error!',
      session: false
    }
  })
};

const actionCreators = {
  login: userAuth => async dispatch => {
    dispatch(privateActionCreators.loginUser());
    const userData = await LoginService.login();
    if (userData.ok) {
      const user = userData.data.filter(
        userDatabase => userDatabase.email === userAuth.email && userDatabase.password === userAuth.password
      );
      if (user.length !== 0) {
        LocalStorageService.saveKey(user[0].token);
        return dispatch(privateActionCreators.loginSuccess());
      }
    }
    return dispatch(privateActionCreators.loginError());
  },
  logout: () => dispatch => {
    LocalStorageService.deleteKey();
    dispatch(privateActionCreators.logout());
  },
  checkToken: () => async dispatch => {
    const token = LocalStorageService.getKey();
    return token
      ? dispatch(privateActionCreators.tokenExists())
      : dispatch(privateActionCreators.tokenNotExists());
  }
};

export default actionCreators;
