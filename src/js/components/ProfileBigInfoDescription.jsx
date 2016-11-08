import React from 'react';
import ProfileBigInfoDescriptionText from './ProfileBigInfoDescriptionText';
import getDescriptionOfPhilosopher from '../selectors/getDescriptionOfPhilosopher';

function ProfileBigInfoDescription({ philosopher }) {
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
        <ProfileBigInfoDescriptionText
          text={getDescriptionOfPhilosopher(philosopher)}
        />
      </div>
    </div>
  );
}

ProfileBigInfoDescription.propTypes = {
  philosopher: React.PropTypes.object,
};

export default ProfileBigInfoDescription;
