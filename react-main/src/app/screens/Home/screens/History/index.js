import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import GameBoard from '../../../../components/Game';
import action from '../../../../../redux/history/actions';

class History extends Component {

  componentDidMount() {
    this.props.getHistoryMatch();
  };

	render() {
    console.log('HISTORY0', this.props);
		return (
			<div>
				{ this.props.history && this.props.history.length > 0 && <GameBoard history={this.props.history[0]}/>}
			</div>
		);
	}
}


const mapStateToProps = state => ({
  history: state.history.history
});

const masDispatchToProps = dispatch => ({
  getHistoryMatch: () => dispatch(action.getGame())
});

export default connect(
  mapStateToProps,
  masDispatchToProps
)(History);
