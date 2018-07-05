import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addStep, setStep } from '../../../redux/history/actions';

import Board from './components/Board';
import Moves from './components/Moves';
import { calculateWinner } from './utils';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }]
  };

  handleClick = i => {
    const { history } = this.state;
    const { stepNumber, handleAddStep, xIsNext } = this.props;
    const current = history[stepNumber];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = xIsNext ? 'X' : 'O';
    const winner = calculateWinner(squares);
    this.setState({
      history: history.concat([{ squares }]),
      winner
    });
    handleAddStep(stepNumber);
  };

  jumpTo = step => {
    const { handleSetStep } = this.props;
    this.setState({
      history: this.state.history.slice(0, step + 1)
    });
    handleSetStep(step);
  };

  render() {
    const { history, winner } = this.state;
    const { stepNumber, xIsNext } = this.props;

    return (
      <div className="game">
        <Board squares={history[stepNumber].squares} handleClick={this.handleClick} />
        <Moves history={history} jumpTo={this.jumpTo} xIsNext={xIsNext} winner={winner} />
      </div>
    );
  }
}

Game.propTypes = {
  stepNumber: PropTypes.number.isRequired,
  xIsNext: PropTypes.bool.isRequired,
  handleAddStep: PropTypes.func.isRequired,
  handleSetStep: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  stepNumber: state.history.stepNumber,
  xIsNext: state.history.xIsNext
});

const masDispatchToProps = dispatch => ({
  handleAddStep: () => dispatch(addStep()),
  handleSetStep: stepNumber => dispatch(setStep(stepNumber))
});

export default connect(
  mapStateToProps,
  masDispatchToProps
)(Game);
