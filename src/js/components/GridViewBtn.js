import React from 'react';
import {
  Glyphicon,
  NavItem,
} from 'react-bootstrap';

function GridViewBtn({ enableGridView, view }){
  return (
    <NavItem eventKey={1} onSelect={enableGridView} href="#">
      <span style={view === 'GRID' ? {
        backgroundColor: '#eee',
        borderRadius: '4px',
        padding: '8px',
      } : { padding: '8px' }}>
        <Glyphicon glyph='th' />
        {' '}
        Grid View
      </span>
    </NavItem>
  );
}

export default GridViewBtn;
