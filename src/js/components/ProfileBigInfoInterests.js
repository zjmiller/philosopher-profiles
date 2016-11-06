import React from 'react';

function ProfileBigInfoInterests({ philosopher }) {
  return (
    <div>
      Interests:
      <ul>
        {philosopher.interests.map((interest, i) =>
          <li key={i}>{interest}</li>
        )}
      </ul>
    </div>
  );
}

export default ProfileBigInfoInterests;
