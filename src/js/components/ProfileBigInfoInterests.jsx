import React from 'react';
import getInterestsOfPhilosopher from '../selectors/getInterestsOfPhilosopher';
import getNameOfInterest from '../selectors/getNameOfInterest';

function ProfileBigInfoInterests({ philosopher }, { state }) {
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
        {getInterestsOfPhilosopher(state, philosopher).map((interest, i) =>
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
  philosopher: React.PropTypes.object,
};

export default ProfileBigInfoInterests;
