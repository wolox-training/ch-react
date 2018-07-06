import React, { Component } from 'react';

import NavBarLinks from './components/NavBarLinks';
import Logout from './components/Logout';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavBarLinks />
        <Logout />
      </div>
    );
  }
}

export default NavBar;
