import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { LINKS_ARRAY } from '../../../../constants';

class NavBarLinks extends Component {
  render() {
    return (
      <div>
        {LINKS_ARRAY.map((link, i) => (
          <Link className="navbarElement" key={i} to={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
    );
  }
}

export default NavBarLinks;
