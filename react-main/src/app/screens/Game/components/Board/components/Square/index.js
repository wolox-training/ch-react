import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Square extends Component {
  onClick = () => this.props.handleClick(this.props.number);

  render() {
    const { value } = this.props;
    return (
      <button className="square" onClick={this.onClick}>
        {value}
      </button>
    );
  }
}

Square.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};

export default Square;
