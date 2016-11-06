import React from 'react';
import {
  MenuItem,
  NavDropdown,
} from 'react-bootstrap';

function SortBy({ changeSortBy }){
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

export default SortBy;
