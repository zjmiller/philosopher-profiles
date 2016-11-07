import React from 'react';

function ProfileBigInfoInstitutions({ philosopher }) {
  return (
    <div>
      <span
        style={{
          fontSize: '20px',
          fontWeight: 700,
        }}
      >
        Institutions
      </span>
      <ul>
        {philosopher.institutions.map((institution, i) =>
          <li key={i}>{institution}</li>
        )}
      </ul>
    </div>
  );
}

ProfileBigInfoInstitutions.propTypes = {
  philosopher: React.PropTypes.object,
};

export default ProfileBigInfoInstitutions;
