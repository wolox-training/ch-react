import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBarLinks extends Component {
  render() {
    const { links } = this.props;
    return (
      <div>
        {links.map((link, i) => (
          <Link className="navbarElement" key={i} to={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
    );
  }
}

export default NavBarLinks;
