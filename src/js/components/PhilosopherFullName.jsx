import React from 'react';
import getFirstNameOfPhilosopher from '../selectors/getFirstNameOfPhilosopher';
import getLastNameOfPhilosopher from '../selectors/getLastNameOfPhilosopher';

function PhilosopherFullName({ philosopher }) {
  return (
    <span>
      {getFirstNameOfPhilosopher(philosopher)}
      {getFirstNameOfPhilosopher(philosopher) ? ' ' : ''}
      {getLastNameOfPhilosopher(philosopher)}
    </span>
  );
}

PhilosopherFullName.propTypes = {
  philosopher: React.PropTypes.object,
};

export default PhilosopherFullName;
