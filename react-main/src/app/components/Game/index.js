import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import action from '../../../redux/history/actions';

import Board from './components/Board';
import Moves from './components/Moves';
import SaveButton from './components/SaveButton';
import { calculateWinner } from './utils';

class GameBoard extends Component {
  state = {
    history: !this.props.history ? [{ squares: Array(9).fill(null) }] : this.props.history,
    winner: null
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.history && this.state.history.length !== nextProps.history.length) {
      this.setState({ history: nextProps.history });
    }
  }

  componentWillUnmount() {
    this.props.reset();
  }

  handleClick = i => {
    if (this.props.history) {
      return;
    }
    const { history } = this.state;
    const { stepNumber, handleAddStep, xIsNext } = this.props;
    const current = history[stepNumber];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    const winner = calculateWinner(squares);
    this.setState({
      history: history.concat([{ squares }]),
      winner
    });
    handleAddStep(stepNumber);
  };

  handleSave = () => {
    this.props.saveMatch([this.state.history]);
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
        <Moves
          history={!this.props.history ? history : this.props.history}
          jumpTo={this.jumpTo}
          xIsNext={xIsNext}
          winner={winner}
        />
        {winner !== null && <SaveButton handleSave={this.handleSave} />}
      </div>
    );
  }
}

GameBoard.propTypes = {
  stepNumber: PropTypes.number.isRequired,
  xIsNext: PropTypes.bool.isRequired,
  handleAddStep: PropTypes.func.isRequired,
  handleSetStep: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.object),
  saveMatch: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  stepNumber: state.history.stepNumber,
  xIsNext: state.history.xIsNext
});

const masDispatchToProps = dispatch => ({
  handleAddStep: () => dispatch(action.addStep()),
  handleSetStep: stepNumber => dispatch(action.setStep(stepNumber)),
  saveMatch: game => dispatch(action.saveGame(game)),
  getHistoryMatch: () => dispatch(action.getMatch()),
  reset: () => dispatch(action.resetGame())
});

export default connect(
  mapStateToProps,
  masDispatchToProps
)(GameBoard);
