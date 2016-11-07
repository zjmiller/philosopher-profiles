import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import FilterBy from './FilterBy';
import GridViewBtn from './GridViewBtn';
import ListViewBtn from './ListViewBtn';
import SiteBrand from './SiteBrand';
import SortBy from './SortBy';

function Header({
  changeFilterBy,
  changeSortBy,
  enableGridView,
  enableListView,
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
            <GridViewBtn enableGridView={enableGridView} view={view} />
            <ListViewBtn enableListView={enableListView} view={view} />
            <FilterBy interests={interests} changeFilterBy={changeFilterBy} />
            <SortBy changeSortBy={changeSortBy} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

Header.propTypes = {
  changeFilterBy: React.PropTypes.func,
  changeSortBy: React.PropTypes.func,
  enableGridView: React.PropTypes.func,
  enableListView: React.PropTypes.func,
  interests: React.PropTypes.array,
  view: React.PropTypes.string,
};

export default Header;
