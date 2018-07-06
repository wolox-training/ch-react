import React, { Component, Fragment } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { PATHS } from '../../../constants';
import NavBar from '../../components/NavBar';

import Game from './screens/Game';
import History from './screens/History';

class Home extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar {...this.props} />
          <Switch>
            <Route exact path={PATHS.GAME} component={Game} />
            <Route exact path={PATHS.HISTORY} component={History} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default Home;
