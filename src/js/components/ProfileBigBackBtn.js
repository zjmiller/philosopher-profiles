import React, { Component } from 'react';
import { Col, Glyphicon } from 'react-bootstrap';

function ProfileBigBackBtn({ leaveProfile }){
  return (
    <Col>
      <span
        onClick={leaveProfile}
        style={{
          cursor: 'pointer'
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

export default ProfileBigBackBtn;
