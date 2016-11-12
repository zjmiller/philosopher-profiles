import React from 'react';
import { connect } from 'react-redux';
import { MenuItem, NavDropdown } from 'react-bootstrap';

function SortBy({ changeSortBy }) {
  return (
    <NavDropdown eventKey={3} title="Sort By" id="basic-nav-dropdown">
      <MenuItem
        eventKey={3.1}
        onClick={() => changeSortBy('LAST_NAME')}
      >
        Last Name
      </MenuItem>
      <MenuItem
        eventKey={3.2}
        onClick={() => changeSortBy('YEAR')}
      >
        Year
      </MenuItem>
    </NavDropdown>
  );
}

SortBy.propTypes = {
  changeSortBy: React.PropTypes.func,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  changeSortBy: (newSortBy) => dispatch({
    type: 'CHANGE_SORT_BY',
    newSortBy,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortBy);
