import React, { Component } from 'react';

import NavBarLinks from './components/NavBarLinks';
import Logout from './components/Logout';
import { LINKS } from './constants';

class NavBar extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="navbar">
        <NavBarLinks links={LINKS} />
        <Logout {...this.props} />
      </div>
    );
  }
}

export default NavBar;
