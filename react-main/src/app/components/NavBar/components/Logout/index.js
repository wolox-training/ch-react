import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import action from '../../../../../redux/login/actions';

class Logout extends Component {
  handleLogout = () => {
    this.props.logout();
    location.reload();
  };

  render() {
    return (
      <button className="logoutButton" onClick={this.handleLogout}>
        Logout
      </button>
    );
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(action.logout())
});

export default connect(
  null,
  mapDispatchToProps
)(Logout);
