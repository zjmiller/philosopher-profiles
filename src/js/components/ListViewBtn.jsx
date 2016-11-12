import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';

import getView from '../selectors/getView';

function ListViewBtn({ enableListView, view }) {
  return (
    <li>
      <Link to="/">
        <span
          onClick={enableListView}
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
      </Link>
    </li>
  );
}

ListViewBtn.propTypes = {
  enableListView: React.PropTypes.func,
  view: React.PropTypes.string,
};

const mapStateToProps = state => ({
  view: getView(state),
});

const mapDispatchToProps = dispatch => ({
  enableListView: () => dispatch({
    type: 'CHANGE_VIEW',
    view: 'LIST',
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListViewBtn);
