import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Moves extends Component {
  handleJumpTo = move => this.props.jumpTo(move);

  render() {
    const { history, winner, xIsNext } = this.props;
    const status = winner ? `The winner is: ${winner}` : `Next player is: ${xIsNext ? 'X' : 'O'}`;
    console.log(history);

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

Moves.propTypes = {
  history: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))).isRequired,
  jumpTo: PropTypes.func.isRequired,
  winner: PropTypes.string,
  xIsNext: PropTypes.bool.isRequired
};

export default Moves;
