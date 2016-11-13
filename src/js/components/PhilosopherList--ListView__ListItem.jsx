import React from 'react';
import { Link } from 'react-router';

import PhilosopherFullName from './PhilosopherFullName';
import PhilosopherTimeAlive from './PhilosopherTimeAlive';

function ListItem({ philosopher }) {
  return (
    <Link
      to={`/${philosopher.name.first}${philosopher.name.last}`}
      style={{
        color: '#333',
        textDecoration: 'none',
      }}
    >
      <div>
        <span
          style={{
            color: '#337ab7',
            cursor: 'pointer',
            fontFamily: 'Helvetica Neue',
            fontSize: '16px',
            fontWeight: 700,
          }}
        >
          <PhilosopherFullName philosopher={philosopher} />
        </span>
        <br />
        <span
          style={{
            fontSize: '13px',
            marginLeft: '10px',
          }}
        >
          {' '}
          <PhilosopherTimeAlive philosopher={philosopher} />
        </span>
      </div>
    </Link>
  );
}

ListItem.propTypes = {
  philosopher: React.PropTypes.object,
};

export default ListItem;
