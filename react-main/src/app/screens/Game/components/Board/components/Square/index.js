import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Square extends Component {
  render() {
    const { onClick, value } = this.props;
    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
  }
}

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default Square;
