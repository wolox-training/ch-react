import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { PATHS } from '../../../constants';

const AuthenticatedRoute = ({ session, isPublicRoute, isPrivateRoute, path, component: Component }) => {
  if (isPublicRoute && session) {
    return <Redirect to={PATHS.HOME} />;
  } else if (isPrivateRoute && !session) {
    return <Redirect to={PATHS.LOGIN} />;
  }
  return <Route path={path} component={Component} />;
};

const mapStateToProps = state => ({
  session: state.login.session
});

AuthenticatedRoute.propTypes = {
  session: PropTypes.bool.isRequired,
  isPrivateRoute: PropTypes.bool,
  isPublicRoute: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired
};

export default connect(mapStateToProps)(AuthenticatedRoute);
