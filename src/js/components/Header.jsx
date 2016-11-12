import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import FilterBy from './FilterBy';
import GridViewBtn from './GridViewBtn';
import ListViewBtn from './ListViewBtn';
import SiteBrand from './SiteBrand';
import SortBy from './SortBy';

function Header() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        style={{
          borderRadius: 0,
        }}
      >
        <Navbar.Header>
          <SiteBrand />
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <GridViewBtn />
            <ListViewBtn />
            <FilterBy />
            <SortBy />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
