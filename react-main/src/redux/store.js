import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { historyReducer } from './history/reducer';
import { loginReducer } from './login/reducer';

const mainReducer = combineReducers({
  history: historyReducer,
  login: loginReducer,
  routing: routerReducer,
  form: formReducer
});

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
