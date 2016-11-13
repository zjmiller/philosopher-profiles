import React from 'react';
import { connect } from 'react-redux';
import getBirthYearOfPhilosopher from '../selectors/getBirthYearOfPhilosopher';
import getBirthEraOfPhilosopher from '../selectors/getBirthEraOfPhilosopher';
import getDeathYearOfPhilosopher from '../selectors/getDeathYearOfPhilosopher';
import getDeathEraOfPhilosopher from '../selectors/getDeathEraOfPhilosopher';

function PhilosopherTimeAlive({ birthEra, birthYear, deathEra, deathYear }) {
  return (
    <span>
      {birthYear}
      <span style={{ fontVariant: 'small-caps', marginLeft: '2px' }} >
        {birthEra.toLowerCase()}
      </span>
      {' '}–{' '}
      {deathYear}
      <span style={{ fontVariant: 'small-caps', marginLeft: '2px' }} >
        {deathEra.toLowerCase()}
      </span>
    </span>
  );
}

PhilosopherTimeAlive.propTypes = {
  birthEra: React.PropTypes.string,
  birthYear: React.PropTypes.number,
  deathEra: React.PropTypes.string,
  deathYear: React.PropTypes.number,
};

const mapStateToProps = (state, { philosopher }) => ({
  birthEra: getBirthEraOfPhilosopher(state, philosopher),
  birthYear: getBirthYearOfPhilosopher(state, philosopher),
  deathEra: getDeathEraOfPhilosopher(state, philosopher),
  deathYear: getDeathYearOfPhilosopher(state, philosopher),
});

export default connect(mapStateToProps)(PhilosopherTimeAlive);
