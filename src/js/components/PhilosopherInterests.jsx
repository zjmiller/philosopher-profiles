import React from 'react';
import { connect } from 'react-redux';
import getInterestsOfPhilosopher from '../selectors/getInterestsOfPhilosopher';
import getNameOfInterest from '../selectors/getNameOfInterest';

function PhilosopherInterests({ interests }) {
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
          <li key={i}>{getNameOfInterest(interest)}</li>
        )}
      </ul>
    </div>
  );
}

PhilosopherInterests.propTypes = {
  interests: React.PropTypes.array,
};

const mapStateToProps = (state, { philosopher }) => ({
  interests: getInterestsOfPhilosopher(state, philosopher),
});

export default connect(mapStateToProps)(PhilosopherInterests);
