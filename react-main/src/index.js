import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Router, Route } from 'react-router-dom';
import { syncHistoryWithStore, browserHistory } from 'react-router-redux';
import thunk from 'redux-thunk';

import './scss/index.scss';
import mainReducer from './redux/store';
import Login from './app/screens/Login';
import Board from './app/screens/Game/components/Board';
import {App} from './app';

const initialState = {
  squares: Array(9).fill(null),
  stepNumber: 0
};

const store = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
