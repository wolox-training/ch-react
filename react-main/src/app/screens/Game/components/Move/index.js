import React, { Component, Fragment } from 'react';

class Move extends Component {
  handleJumpTo = move => {
    this.props.jumpTo(move);
  };

  render() {
    const { history, jumpTo, winner, xIsNext } = this.props;

    let status;
    if (winner) {
      status = `The winner is: ${winner}`;
    } else {
      status = `Next player is: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game-info">
        <div>{status}</div>
        {history.map((step, move) => (
          <li key={move}>
            <button onClick={() => this.handleJumpTo(move)}>
              {move ? `Go to move #${move}` : 'Go to game start'}
            </button>
          </li>
        ))}
      </div>
    );
  }
}

export default Move;
