import * as LoginService from '../../services/LoginService';
import * as LocalStorageService from '../../services/LocalStorageService';

export const actions = {
  loginUser: 'LOGIN_USER',
  loginSuccess: 'LOGIN_SUCCESS',
  loginError: 'LOGIN_ERROR',
  tokenExists: 'TOKEN_EXISTS',
  tokenNotExists: 'TOKEN_NOT_EXISTS'
};

export const tokenExists = user => ({
  type: actions.tokenExists,
  message: `Welcome ${user.email}`,
  session: true
});

export const tokenNotExists = () => ({
  type: actions.tokenNotExists,
  session: false
});

export const loginUser = () => ({
  type: actions.loginUser
});

export const loginSuccess = () => ({
  type: actions.loginSuccess,
  message: 'Login correct!'
});

export const loginError = () => ({
  type: actions.loginError,
  message: 'Login error!'
});

const actionCreators = {
  login: userAuth => async dispatch => {
    dispatch(loginUser());
    try {
      const userData = await LoginService.login();
      const user = userData.filter(
        userDatabase => userDatabase.email === userAuth.email && userDatabase.password === userAuth.password
      );
      if (user.length !== 0) {
        LocalStorageService.saveKey(user[0].token);
        dispatch(loginSuccess());
      } else {
        dispatch(loginError());
      }
    } catch (error) {
      return dispatch(loginError(error));
    }
  },
  checkToken: () => async dispatch => {
    const token = LocalStorageService.getKey();
    const userData = await LoginService.login();
    const user = userData.filter(userDatabase => userDatabase.token === token);
    return token ? dispatch(tokenExists(user[0])) : false;
  }
};

export default actionCreators;
