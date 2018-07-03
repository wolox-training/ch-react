import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import action from '../../../redux/login/actions';

import LoginForm from './components/LoginForm';
import Message from './components/Message';

class Login extends Component {
  componentDidMount() {
    this.props.checkSession();
  }

  submit = values => this.props.handleAddStep({ ...values });

  render() {
    const { loginMessage, session } = this.props;
    return (
      <Fragment>
        {!session && <LoginForm onSubmit={this.submit} />}
        {(loginMessage.length > 0 || !session) && <Message message={loginMessage} />}
      </Fragment>
    );
  }
}

Login.propTypes = {
  loginMessage: PropTypes.string,
  handleAddStep: PropTypes.func,
  checkSession: PropTypes.func,
  session: PropTypes.bool
};

const mapStateToProps = state => ({
  loginMessage: state.login.message,
  session: state.login.session
});

const masDispatchToProps = dispatch => ({
  handleAddStep: loginData => dispatch(action.login(loginData)),
  checkSession: () => dispatch(action.checkToken())
});

export default connect(
  mapStateToProps,
  masDispatchToProps
)(Login);
