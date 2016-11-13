import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import Header__FilterBy from './Header__FilterBy';
import Header__GridViewBtn from './Header__GridViewBtn';
import Header__ListViewBtn from './Header__ListViewBtn';
import Header__SiteBrand from './Header__SiteBrand';
import Header__SortBy from './Header__SortBy';

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect style={{ borderRadius: 0 }}>
        <Navbar.Header>
          <Header__SiteBrand />
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <Header__GridViewBtn />
            <Header__ListViewBtn a={1} />
            <Header__FilterBy />
            <Header__SortBy />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
