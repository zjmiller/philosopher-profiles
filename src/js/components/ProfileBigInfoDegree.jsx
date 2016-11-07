import React from 'react';

function ProfileBigInfoDegree({ philosopher }) {
  return (
    <div>
      <span
        style={{
          fontSize: '20px',
          fontWeight: 700,
        }}
      >
        Degree
      </span>
      <ul>
        <li>{philosopher.degree}</li>
      </ul>
    </div>
  );
}

ProfileBigInfoDegree.propTypes = {
  philosopher: React.PropTypes.shape({}),
};

export default ProfileBigInfoDegree;
