import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import FilterBy from './FilterBy';
import GridViewBtn from './GridViewBtn';
import ListViewBtn from './ListViewBtn';
import SiteBrand from './SiteBrand';
import SortBy from './SortBy';

function Header({
  changeFilterBy,
  interests,
  view,
}) {
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
            <GridViewBtn view={view} />
            <ListViewBtn view={view} />
            <FilterBy interests={interests} changeFilterBy={changeFilterBy} />
            <SortBy />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

Header.propTypes = {
  changeFilterBy: React.PropTypes.func,
  interests: React.PropTypes.array,
  view: React.PropTypes.string,
};

export default Header;
