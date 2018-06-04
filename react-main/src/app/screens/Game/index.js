import React, { Component, Fragment } from 'react';

import Board from './components/Board';

import './styles.scss';

class Game extends Component {
  render() {
    return (
      <Fragment className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </Fragment>
    );
  }
}

export default Game;
