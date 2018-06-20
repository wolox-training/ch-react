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
    this.setState({
      history: history.concat([{ squares }])
    });
    handleAddStep(stepNumber);
  };

  jumpTo = step => {
    const { handleSetStep } = this.props;
    handleSetStep(step);
  };

  render() {
    const { history } = this.state;
    const { stepNumber, xIsNext } = this.props;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    console.log(stepNumber, xIsNext);

    return (
      <div className="game">
        <Board squares={current.squares} handleClick={this.handleClick} />
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
  stepNumber: state.historyReducer.stepNumber,
  xIsNext: state.historyReducer.xIsNext
});

const masDispatchToProps = dispatch => ({
  handleAddStep: () => dispatch(addStep()),
  handleSetStep: stepNumber => dispatch(setStep(stepNumber))
});

export default connect(
  mapStateToProps,
  masDispatchToProps
)(Game);
