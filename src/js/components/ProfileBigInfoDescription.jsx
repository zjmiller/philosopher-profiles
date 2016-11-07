import React from 'react';
import ProfileBigInfoDescriptionText from './ProfileBigInfoDescriptionText';

function ProfileBigInfoDescription({ philosopher }) {
  return (
    <div>
      <span
        style={{
          fontSize: '20px',
          fontWeight: 700,
        }}
      >
        Description
      </span>
      <div style={{ marginLeft: '10px' }}>
        <ProfileBigInfoDescriptionText text={philosopher.description} />
      </div>
    </div>
  );
}

ProfileBigInfoDescription.propTypes = {
  philosopher: React.PropTypes.object,
};

export default ProfileBigInfoDescription;
