import React from 'react';

function ProfileBigInfoDescriptionText({ text }) {
  return (
    <div>
      {text.split(/[\n\r]/g).map(
        chunk =>
        <p style={{ margin: '10px' }}>{chunk}</p>
      )}
    </div>
  );
}

export default ProfileBigInfoDescriptionText;
