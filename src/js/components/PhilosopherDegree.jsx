import React from 'react';
import getDegreeOfPhilosopher from '../selectors/getDegreeOfPhilosopher';

function ProfileBigInfoDegree({ philosopher }) {
  return (
    <div>
      <span
        style={{
          fontFamily: 'Helvetica',
          fontSize: '20px',
          fontWeight: 700,
        }}
      >
        Degree
      </span>
      <ul>
        <li>{getDegreeOfPhilosopher(philosopher)}</li>
      </ul>
    </div>
  );
}

ProfileBigInfoDegree.propTypes = {
  philosopher: React.PropTypes.shape({}),
};

export default ProfileBigInfoDegree;
