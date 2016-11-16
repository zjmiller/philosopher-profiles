import React from 'react';
import { connect } from 'react-redux';
import InterestName from './InterestName';
import getInterestsOfPhilosopher from '../selectors/getInterestsOfPhilosopher';

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
          <li key={i}>
            <InterestName interest={interest} />
          </li>
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
