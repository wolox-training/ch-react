import React, { Component } from 'react';

class SaveButton extends Component {
  render() {
    const { handleSave } = this.props;
    return <button className="button" onClick={handleSave}>Save Match</button>;
  }
}

export default SaveButton;
