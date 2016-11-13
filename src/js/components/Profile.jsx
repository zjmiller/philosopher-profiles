import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import Profile__BackBtn from './Profile__BackBtn';
import Profile__Photo from './Profile__Photo';
import Profile__Info from './Profile__Info';

import getPhilosopherByFullNameWithoutSpaceSeparation
  from '../selectors/getPhilosopherByFullNameWithoutSpaceSeparation';

function Profile({ philosopher }) {
  return (
    <Grid>
      <Row style={{ marginBottom: '15px' }}>
        <div style={{ marginLeft: '5px' }}>
          <Profile__BackBtn />
        </div>
      </Row>
      <Row>
        <Profile__Photo philosopher={philosopher} />
        <Profile__Info philosopher={philosopher} />
      </Row>
    </Grid>
  );
}

Profile.propTypes = {
  philosopher: React.PropTypes.object,
};

const mapStateToProps = (state, { params }) => ({
  philosopher: getPhilosopherByFullNameWithoutSpaceSeparation(state, params.name),
});

export default connect(mapStateToProps)(Profile);
