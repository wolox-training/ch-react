import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../../../../redux/login/actions';

class Logout extends Component {
  handleLogout = () => this.props.logout();

  render() {
    console.log(this.props);
    return <div onClick={this.handleLogout}>Logout</div>;
  }
}

const mapStateToProps = state => ({
  
});

const masDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  masDispatchToProps,
  mapStateToProps
)(Logout);
