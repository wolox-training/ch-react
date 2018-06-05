import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import mainStore from './redux/store';
import { App } from './app';

const initialState = {
  squares: Array(9).fill(null),
  stepNumber: 0
};

const store = mainStore(initialState);
console.log(store.getState().historyReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
