import React from 'react';
import PhilosopherDescription__Text from './PhilosopherDescription__Text';
import getDescriptionOfPhilosopher from '../selectors/getDescriptionOfPhilosopher';

function PhilosopherDescription({ philosopher }) {
  return (
    <div>
      <span
        style={{
          fontFamily: 'Helvetica',
          fontSize: '20px',
          fontWeight: 700,
        }}
      >
        Description
      </span>
      <div style={{ marginLeft: '10px' }}>
        <PhilosopherDescription__Text
          text={getDescriptionOfPhilosopher(philosopher)}
        />
      </div>
    </div>
  );
}

PhilosopherDescription.propTypes = {
  philosopher: React.PropTypes.object,
};

export default PhilosopherDescription;
