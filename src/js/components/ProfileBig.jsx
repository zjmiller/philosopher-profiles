import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import ProfileBigBackBtn from './ProfileBigBackBtn';
import ProfileBigPhoto from './ProfileBigPhoto';
import ProfileBigInfo from './ProfileBigInfo';

function ProfileBig({ leaveProfile, philosopher }) {
  return (
    <Grid>
      <Row style={{ marginBottom: '15px' }}>
        <ProfileBigBackBtn leaveProfile={leaveProfile} />
      </Row>
      <Row>
        <ProfileBigPhoto philosopher={philosopher} />
        <ProfileBigInfo philosopher={philosopher} />
      </Row>
    </Grid>
  );
}

ProfileBig.propTypes = {
  leaveProfile: React.PropTypes.func,
  philosopher: React.PropTypes.object,
};

export default ProfileBig;
