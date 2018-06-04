import React, { Component, Fragment } from 'react';

import Square from './components/Square';

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    isNext: true
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
    const { isNext, squares } = this.state;
    const diffSquares = squares.slice();
    if (this.calculateWinner(squares) || squares[i]) return;
    diffSquares[i] = isNext ? 'X' : 'O';
    this.setState({ squares: diffSquares, isNext: !this.state.isNext });
  };

  renderSquare = i => <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;

  render() {
    const { isNext, squares } = this.state;
    const winner = this.calculateWinner(squares);
    let status;

    if (winner) {
      status = `The winner is: ${winner}`;
    } else {
      status = `Next player is: ${isNext ? 'X' : 'O'}`;
    }

    return (
      <Fragment>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </Fragment>
    );
  }
}

export default Board;
