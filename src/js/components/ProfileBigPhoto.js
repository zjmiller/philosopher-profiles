import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

function ProfileBigPhoto({ philosopher }){
  return (
    <Col
      lg={2} lgOffset={0}
      md={3} mdOffset={0}
      sm={4} smOffset={0}
      xs={6} xsOffset={3}
      style={{
        backgroundImage: `url("imgs/${philosopher.img}")`,
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        border: '5px solid #222',
        height: '300px',
      }}
    />
  );
}

export default ProfileBigPhoto;
