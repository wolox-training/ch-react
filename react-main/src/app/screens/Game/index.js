import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addStep, setStep } from '../../../redux/history/actions';

import Board from './components/Board';

import './styles.scss';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }]
  };

  calculateWinner = squares => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  handleClick = i => {
    const { history } = this.state;
    const { stepNumber, addStep, xIsNext } = this.props;
    const current = history.slice(0, stepNumber + 1);
    const modifiedHistory = current[current.length - 1];
    const squares = modifiedHistory.squares.slice();

    if (this.calculateWinner(squares) || squares[i]) return;
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({
      history: current.concat([{ squares }])
    });
    addStep(stepNumber);
  };

  jumpTo = step => {
    const { setStep } = this.props;
    setStep(step);
  };

  render() {
    const { history } = this.state;
    const { stepNumber, xIsNext } = this.props;
    const current = history[stepNumber];
    const winner = this.calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `The winner is: ${winner}`;
    } else {
      status = `Next player is: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stepNumber: state.historyReducer.stepNumber,
  xIsNext: state.historyReducer.xIsNext
});

const masDispatchToProps = dispatch => ({
  addStep: () => dispatch(addStep()),
  setStep: stepNumber => dispatch(setStep(stepNumber))
});

export default connect(
  mapStateToProps,
  masDispatchToProps
)(Game);
