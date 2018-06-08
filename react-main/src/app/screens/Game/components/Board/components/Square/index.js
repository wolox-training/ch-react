import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Square extends Component {
  onClick = () => this.props.handleClick(this.props.number);

  render() {
    const { value } = this.props;
    console.log(this.props);
    return (
      <button className="square" onClick={this.onClick}>
        {value}
      </button>
    );
  }
}

Square.propTypes = {
  handleClick: PropTypes.func,
  value: PropTypes.string,
  number: PropTypes.number
};

export default Square;
