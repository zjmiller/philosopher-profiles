import React from 'react';
import { connect } from 'react-redux';
import PhilosopherDescription__Text from './PhilosopherDescription__Text';
import getDescriptionOfPhilosopher from '../selectors/getDescriptionOfPhilosopher';

function PhilosopherDescription({ description }) {
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
        <PhilosopherDescription__Text
          text={description}
        />
      </div>
    </div>
  );
}

PhilosopherDescription.propTypes = {
  description: React.PropTypes.string,
};

const mapStateToProps = (state, { philosopher }) => ({
  description: getDescriptionOfPhilosopher(state, philosopher),
});

export default connect(mapStateToProps)(PhilosopherDescription);
