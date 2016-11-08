import React from 'react';
import getBirthYearOfPhilosopher from '../selectors/getBirthYearOfPhilosopher';
import getBirthEraOfPhilosopher from '../selectors/getBirthEraOfPhilosopher';
import getDeathYearOfPhilosopher from '../selectors/getDeathYearOfPhilosopher';
import getDeathEraOfPhilosopher from '../selectors/getDeathEraOfPhilosopher';

function PhilosopherTimeAlive({ philosopher }) {
  return (
    <span>
      {getBirthYearOfPhilosopher(philosopher)}
      <span style={{ fontVariant: 'small-caps', marginLeft: '2px' }} >
        {getBirthEraOfPhilosopher(philosopher).toLowerCase()}
      </span>
      {' '}–{' '}
      {getDeathYearOfPhilosopher(philosopher)}
      <span style={{ fontVariant: 'small-caps', marginLeft: '2px' }} >
        {getDeathEraOfPhilosopher(philosopher).toLowerCase()}
      </span>
    </span>
  );
}

PhilosopherTimeAlive.propTypes = {
  philosopher: React.PropTypes.object,
};

export default PhilosopherTimeAlive;
