import React from 'react';
import { connect } from 'react-redux';
import getDegreeOfPhilosopher from '../selectors/getDegreeOfPhilosopher';

function ProfileBigInfoDegree({ degree }) {
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
        <li>{degree}</li>
      </ul>
    </div>
  );
}

ProfileBigInfoDegree.propTypes = {
  degree: React.PropTypes.string,
};

const mapStateToProps = (state, { philosopher }) => ({
  degree: getDegreeOfPhilosopher(state, philosopher),
});

export default connect(mapStateToProps)(ProfileBigInfoDegree);
