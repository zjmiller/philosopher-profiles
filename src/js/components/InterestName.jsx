import React from 'react';
import { connect } from 'react-redux';
import getNameOfInterest from '../selectors/getNameOfInterest';

function InterestName({ name, style }) {
  return (
    <span style={style}>{ name }</span>
  );
}

InterestName.propTypes = {
  name: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,
};

const mapStateToProps = (state, { interest }) => ({
  name: getNameOfInterest(state, interest),
});

export default connect(mapStateToProps)(InterestName);
