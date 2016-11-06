import React from 'react';
import PhilosopherFullName from './PhilosopherFullName';
import PhilosopherTimeAlive from './PhilosopherTimeAlive';

function ProfileBigInfoNameHeader({ philosopher }){
  return (
    <h2 style={{ marginTop: '1px' }}>
      <PhilosopherFullName philosopher={philosopher} />
      {' '}
      <small>
        <PhilosopherTimeAlive philosopher={philosopher} />
      </small>
    </h2>
  );
}

export default ProfileBigInfoNameHeader;
