import React from 'react';
import PhilosopherFullName from './PhilosopherFullName';
import PhilosopherTimeAlive from './PhilosopherTimeAlive';

function ProfileListView({ handleClick, philosopher }) {
  return (
    <div
      onClick={handleClick}
    >
      <span
        style={{
          color: '#366',
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
  );
}

ProfileListView.propTypes = {
  handleClick: React.PropTypes.func,
  philosopher: React.PropTypes.object,
};

export default ProfileListView;
