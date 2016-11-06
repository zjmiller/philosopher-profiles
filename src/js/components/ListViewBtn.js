import React from 'react';
import {
  Glyphicon,
  NavItem,
} from 'react-bootstrap';

function ListViewBtn({ enableListView, view }){
  return (
    <NavItem eventKey={2} onSelect={enableListView} href="#">
      <span style={view === 'LIST' ? {
        backgroundColor: '#eee',
        borderRadius: '4px',
        padding: '8px',
      } : { padding: '8px' }}>
        <Glyphicon glyph='th-list' />
        {' '}
        List View
      </span>
    </NavItem>
  );
}

export default ListViewBtn;
