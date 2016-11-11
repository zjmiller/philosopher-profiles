import React from 'react';
import { connect } from 'react-redux';
import getInterestsOfPhilosopher from '../selectors/getInterestsOfPhilosopher';
import getNameOfInterest from '../selectors/getNameOfInterest';

function ProfileBigInfoInterests({ interests }) {
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

ProfileBigInfoInterests.contextTypes = {
  state: React.PropTypes.object,
};

ProfileBigInfoInterests.propTypes = {
  interests: React.PropTypes.array,
};

const mapStateToProps = (state, { philosopher }) => ({
  interests: getInterestsOfPhilosopher(state, philosopher),
});

export default connect(mapStateToProps)(ProfileBigInfoInterests);
