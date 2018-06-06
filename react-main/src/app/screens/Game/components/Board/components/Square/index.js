import React, { Component } from 'react';

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

export default Square;
