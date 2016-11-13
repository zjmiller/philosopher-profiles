import React from 'react';
import { connect } from 'react-redux';
import getInterestsOfPhilosopher from '../selectors/getInterestsOfPhilosopher';
import getNameOfInterest from '../selectors/getNameOfInterest';

function PhilosopherInterests({ getNameOfInterestBound, interests }) {
  return (
    <div>
      <span
        style={{
          fontFamily: 'Helvetica',
          fontSize: '20px',
          fontWeight: 700,
        }}
      >
        Interests
      </span>
      <ul>
        {interests.map((interest, i) =>
          <li key={i}>{getNameOfInterestBound(interest)}</li>
        )}
      </ul>
    </div>
  );
}

PhilosopherInterests.propTypes = {
  getNameOfInterestBound: React.PropTypes.func,
  interests: React.PropTypes.array,
};

const mapStateToProps = (state, { philosopher }) => ({
  getNameOfInterestBound: getNameOfInterest.bind(this, state),
  interests: getInterestsOfPhilosopher(state, philosopher),
});

export default connect(mapStateToProps)(PhilosopherInterests);
