import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';

import './scss/index.scss';
import store from './redux/store';
import Login from './app/screens/Login';
import { App } from './app';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
