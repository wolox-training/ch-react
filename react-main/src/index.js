import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './scss/index.scss';
import mainStore from './redux/store';
import { App } from './app';

const initialState = {
  squares: Array(9).fill(null),
  stepNumber: 0
};

const store = mainStore(initialState);
console.log('store', store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
