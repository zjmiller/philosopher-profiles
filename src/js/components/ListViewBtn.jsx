import React from 'react';
import { connect } from 'react-redux';
import {
  Glyphicon,
  NavItem,
} from 'react-bootstrap';

function ListViewBtn({ enableListView, view }) {
  return (
    <NavItem eventKey={2} onSelect={enableListView} href="#">
      <span
        style={view === 'LIST' ? {
          backgroundColor: '#eee',
          borderRadius: '4px',
          padding: '8px',
        } : { padding: '8px' }}
      >
        <Glyphicon glyph="th-list" />
        {' '}
        List View
      </span>
    </NavItem>
  );
}

ListViewBtn.propTypes = {
  enableListView: React.PropTypes.func,
  view: React.PropTypes.string,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  enableListView: () => dispatch({
    type: 'CHANGE_VIEW',
    view: 'LIST',
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListViewBtn);
