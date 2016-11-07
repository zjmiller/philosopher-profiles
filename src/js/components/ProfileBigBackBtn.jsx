import React from 'react';
import { Col, Glyphicon } from 'react-bootstrap';

function ProfileBigBackBtn({ leaveProfile }) {
  return (
    <Col>
      <span
        onClick={leaveProfile}
        style={{
          cursor: 'pointer',
        }}
      >
        {' '}
        <Glyphicon glyph="chevron-left" />
        {' '}
      Back
      </span>
    </Col>
  );
}

ProfileBigBackBtn.propTypes = {
  leaveProfile: React.PropTypes.func,
};

export default ProfileBigBackBtn;
