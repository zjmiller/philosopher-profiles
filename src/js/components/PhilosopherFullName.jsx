import React from 'react';
import { connect } from 'react-redux';
import getFirstNameOfPhilosopher from '../selectors/getFirstNameOfPhilosopher';
import getLastNameOfPhilosopher from '../selectors/getLastNameOfPhilosopher';

export function PhilosopherFullName({ firstName, lastName }) {
  return (
    <span>
      {firstName}
      {firstName ? ' ' : ''}
      {lastName}
    </span>
  );
}

PhilosopherFullName.propTypes = {
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string,
};

const mapStateToProps = (state, { philosopher }) => ({
  firstName: getFirstNameOfPhilosopher(state, philosopher),
  lastName: getLastNameOfPhilosopher(state, philosopher),
});

export default connect(mapStateToProps)(PhilosopherFullName);
