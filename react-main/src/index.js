import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './scss/index.scss';
import mainStore from './redux/store';
import { App } from './app';
import Routes from './app/components/Routes';

const initialState = {
  squares: Array(9).fill(null),
  stepNumber: 0
};

const store = mainStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
