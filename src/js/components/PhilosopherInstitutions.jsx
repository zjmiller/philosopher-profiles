import React from 'react';
import { connect } from 'react-redux';
import getInstitutionsOfPhilosopher from '../selectors/getInstitutionsOfPhilosopher';
import getNameOfInstitution from '../selectors/getNameOfInstitution';

function PhilosopherInstitutions({ getNameOfInstitutionBound, institutions }) {
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
        {institutions.map((institution, i) =>
          <li key={i}>{getNameOfInstitutionBound(institution)}</li>
        )}
      </ul>
    </div>
  );
}

PhilosopherInstitutions.propTypes = {
  getNameOfInstitutionBound: React.PropTypes.func,
  institutions: React.PropTypes.array,
};

const mapStateToProps = (state, { philosopher }) => ({
  getNameOfInstitutionBound: getNameOfInstitution.bind(this, state),
  institutions: getInstitutionsOfPhilosopher(state, philosopher),
});

export default connect(mapStateToProps)(PhilosopherInstitutions);
