import React from 'react';
import { Col, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

function ProfileBigBackBtn() {
  return (
    <Col>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
        }}
      >
        <span>
          {' '}
          <Glyphicon glyph="chevron-left" />
          {' '}
        Back
        </span>
      </Link>
    </Col>
  );
}

export default ProfileBigBackBtn;
