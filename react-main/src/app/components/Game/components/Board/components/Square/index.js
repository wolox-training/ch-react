import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Square extends Component {
  onClick = () => this.props.handleClick(this.props.number);

  render() {
    const { value, disabled } = this.props;
    return (
      <button className={`square ${!disabled ? '' : 'disabled'}`} onClick={this.onClick}>
        {value}
      </button>
    );
  }
}

Square.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  number: PropTypes.number.isRequired,
  disabled: PropTypes.bool
};

export default Square;
