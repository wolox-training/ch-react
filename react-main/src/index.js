import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';

import { PATHS } from './constants';
import './scss/index.scss';
import store from './redux/store';
import AuthenticatedRoute from './app/components/AuthenticatedRoute';
import Home from './app/screens/Home';
import Login from './app/screens/Login';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <AuthenticatedRoute path={PATHS.LOGIN} component={Login} isPublicRoute />
        <AuthenticatedRoute path={PATHS.HOME} component={Home} isPrivateRoute />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
