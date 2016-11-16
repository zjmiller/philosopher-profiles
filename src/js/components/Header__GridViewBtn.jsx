import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import getView from '../selectors/getView';

function Header__GridViewBtn({ enableGridView, view }) {
  return (
    <li>
      <Link to="/">
        <span
          onClick={enableGridView}
          style={
            view === 'GRID'
            ?
              {
                backgroundColor: '#eee',
                borderRadius: '4px',
                padding: '8px',
              }
            :
            { padding: '8px' }
          }
        >
          <Glyphicon glyph="th" />
          {' '}
          Grid
        </span>
      </Link>
    </li>
  );
}

Header__GridViewBtn.propTypes = {
  enableGridView: React.PropTypes.func,
  view: React.PropTypes.string,
};

const mapStateToProps = state => ({
  view: getView(state),
});

const mapDispatchToProps = dispatch => ({
  enableGridView: () => dispatch({
    type: 'CHANGE_VIEW',
    view: 'GRID',
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header__GridViewBtn);
