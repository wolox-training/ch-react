import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonHistory extends Component {
  handleClick = () => this.props.handleHistoryClick(this.props.historyNumber);

  render() {
    return (
      <button
        className={`button ${this.props.currentHistory === this.props.historyNumber ? 'activeHistory' : ''}`}
        onClick={this.handleClick}
      >
        History {this.props.historyNumber}
      </button>
    );
  }
}

ButtonHistory.propTypes = {
  handleHistoryClick: PropTypes.func.isRequired,
  historyNumber: PropTypes.number,
  currentHistory: PropTypes.number
};

export default ButtonHistory;
