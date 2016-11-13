import React from 'react';
import getInstitutionsOfPhilosopher from '../selectors/getInstitutionsOfPhilosopher';
import getNameOfInstitution from '../selectors/getNameOfInstitution';

function PhilosopherInstitutions({ philosopher }) {
  return (
    <div>
      <span
        style={{
          fontFamily: 'Helvetica',
          fontSize: '20px',
          fontWeight: 700,
        }}
      >
        Institutions
      </span>
      <ul>
        {getInstitutionsOfPhilosopher(philosopher).map((institution, i) =>
          <li key={i}>{getNameOfInstitution(institution)}</li>
        )}
      </ul>
    </div>
  );
}

PhilosopherInstitutions.propTypes = {
  philosopher: React.PropTypes.object,
};

export default PhilosopherInstitutions;
