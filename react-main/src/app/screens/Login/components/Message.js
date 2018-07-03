import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
  render() {
    const { message } = this.props;
    return <div className="alert">{message}</div>;
  }
}

Message.propTypes = {
  message: PropTypes.string
};

export default Message;
