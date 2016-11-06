import React from 'react';

function PhilosopherTimeAlive({ philosopher }){
  return (
    <span>
      {philosopher.birth.year}
      <span style={{ fontVariant: 'small-caps', marginLeft: '2px' }} >
        {philosopher.birth.era.toLowerCase()}
      </span>
      {' '}–{' '}
      {philosopher.death.year}
      <span style={{ fontVariant: 'small-caps', marginLeft: '2px' }} >
        {philosopher.death.era.toLowerCase()}
      </span>
    </span>
  );
}

export default PhilosopherTimeAlive;
