import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import getView from '../selectors/getView';

function Header__ListViewBtn({ enableListView, view }) {
  return (
    <li>
      <Link to="/">
        <span
          onClick={enableListView}
          style={
            view === 'LIST' ?
              {
                backgroundColor: '#eee',
                borderRadius: '4px',
                padding: '8px',
              }
          : { padding: '8px' }
        }
        >
          <Glyphicon glyph="th-list" />
          {' '}
          List
        </span>
      </Link>
    </li>
  );
}

Header__ListViewBtn.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Header__ListViewBtn);
