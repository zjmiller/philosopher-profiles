import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import ProfileBigBackBtn from './ProfileBigBackBtn';
import ProfileBigPhoto from './ProfileBigPhoto';
import ProfileBigInfo from './ProfileBigInfo';

import getPhilosopherByFullNameWithoutSpaceSeparation
  from '../selectors/getPhilosopherByFullNameWithoutSpaceSeparation';

function ProfileBig({ philosopher }) {
  return (
    <Grid>
      <Row style={{ marginBottom: '15px' }}>
        <div style={{ marginLeft: '5px' }}>
          <ProfileBigBackBtn />
        </div>
      </Row>
      <Row>
        <ProfileBigPhoto philosopher={philosopher} />
        <ProfileBigInfo philosopher={philosopher} />
      </Row>
    </Grid>
  );
}

ProfileBig.propTypes = {
  philosopher: React.PropTypes.object,
};

const mapStateToProps = (state, { params }) => ({
  philosopher: getPhilosopherByFullNameWithoutSpaceSeparation(state, params.name),
});

export default connect(mapStateToProps)(ProfileBig);
