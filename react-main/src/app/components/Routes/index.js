import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../../screens/Login';
import Board from '../../screens/Game/components/Board';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path={'/'} component={Login} />
        <Route path={'/board'} component={Board} />
      </Switch>
    );
  }
}

export default Routes;
