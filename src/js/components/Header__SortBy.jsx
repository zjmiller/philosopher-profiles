import React from 'react';
import { MenuItem, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';

function Header__SortBy({ changeSortBy }) {
  return (
    <NavDropdown eventKey={3} title="Sort" id="basic-nav-dropdown">
      <MenuItem
        eventKey={3.1}
        onClick={() => changeSortBy('LAST_NAME_ASC')}
      >
        Last Name <span style={{ fontVariant: 'small-caps' }}>a-z</span>
      </MenuItem>
      <MenuItem
        eventKey={3.2}
        onClick={() => changeSortBy('LAST_NAME_DESC')}
      >
        Last Name <span style={{ fontVariant: 'small-caps' }}>z-a</span>
      </MenuItem>
      <MenuItem
        eventKey={3.3}
        onClick={() => changeSortBy('YEAR_ASC')}
      >
        Oldest First
      </MenuItem>
      <MenuItem
        eventKey={3.4}
        onClick={() => changeSortBy('YEAR_DESC')}
      >
        Most Recent First
      </MenuItem>
    </NavDropdown>
  );
}

Header__SortBy.propTypes = {
  changeSortBy: React.PropTypes.func,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  changeSortBy: (newSortBy) => dispatch({
    type: 'CHANGE_SORT_BY',
    newSortBy,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header__SortBy);
