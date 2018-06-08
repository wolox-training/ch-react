import React, { Component } from 'react';

import Board from './components/Board';
import Moves from './components/Moves';
import { calculateWinner } from './utils';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true
  };

  handleClick = i => {
    const { history, xIsNext, stepNumber } = this.state;
    const current = history[stepNumber];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares }]),
      xIsNext: !xIsNext,
      stepNumber: history.length
    });
  };

  jumpTo = step =>
    this.setState({
      history: this.state.history.slice(0, step + 1),
      stepNumber: step,
      xIsNext: step % 2 === 0
    });

  render() {
    const { xIsNext, history, stepNumber } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    return (
      <div className="game">
        <Board squares={current.squares} handleClick={this.handleClick} />
        <Moves history={history} jumpTo={this.jumpTo} xIsNext={xIsNext} winner={winner} />
      </div>
    );
  }
}

export default Game;
