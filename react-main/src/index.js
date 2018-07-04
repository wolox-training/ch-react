import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';

import './scss/index.scss';
import store from './redux/store';
import Login from './app/screens/Login';
import { App } from './app';
import NavBar from './app/components/NavBar';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Login} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById('root')
);
