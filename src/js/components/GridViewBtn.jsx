import React from 'react';
import { connect } from 'react-redux';
import {
  Glyphicon,
  NavItem,
} from 'react-bootstrap';

function GridViewBtn({ enableGridView, view }) {
  return (
    <NavItem eventKey={1} onSelect={enableGridView} href="#">
      <span
        style={
          view === 'GRID'
          ?
            {
              backgroundColor: '#eee',
              borderRadius: '4px',
              padding: '8px',
            }
          :
          { padding: '8px' }}
      >
        <Glyphicon glyph="th" />
        {' '}
        Grid View
      </span>
    </NavItem>
  );
}

GridViewBtn.propTypes = {
  enableGridView: React.PropTypes.func,
  view: React.PropTypes.string,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  enableGridView: () => dispatch({
    type: 'CHANGE_VIEW',
    view: 'GRID',
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GridViewBtn);
