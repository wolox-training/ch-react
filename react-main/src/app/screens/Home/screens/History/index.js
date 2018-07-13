import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GameBoard from '../../../../components/Game';
import action from '../../../../../redux/history/actions';

import ButtonHistory from './components/ButtonHistory';

class History extends Component {
  state = { currentHistory: 0 };

  componentDidMount() {
    this.props.getHistoryMatch();
  }

  handleHistoryClick = historyClicked => {
    this.setState({ currentHistory: historyClicked });
    this.props.reset();
  };

  render() {
    const { currentHistory } = this.state;
    const { history } = this.props;
    return (
      <Fragment>
        <div className="buttonContainer">
          {history &&
            history.map((game, i) => (
              <ButtonHistory
                currentHistory={currentHistory}
                key={i}
                handleHistoryClick={this.handleHistoryClick}
                historyNumber={i}
              />
            ))}
        </div>
        {history && history.length > 0 && <GameBoard history={history[currentHistory]} />}
      </Fragment>
    );
  }
}

History.propTypes = {
  getHistoryMatch: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  history: state.history.history
});

const masDispatchToProps = dispatch => ({
  getHistoryMatch: () => dispatch(action.getGame()),
  reset: () => dispatch(action.resetGame())
});

export default connect(
  mapStateToProps,
  masDispatchToProps
)(History);
