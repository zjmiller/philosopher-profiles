import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ProfileBigInfoNameHeader from './ProfileBigInfoNameHeader';
import ProfileBigInfoDegree from './ProfileBigInfoDegree';
import ProfileBigInfoInstitutions from './ProfileBigInfoInstitutions';
import ProfileBigInfoIdeas from './ProfileBigInfoIdeas';
import ProfileBigInfoInterests from './ProfileBigInfoInterests';
import ProfileBigInfoDescription from './ProfileBigInfoDescription';

function ProfileBigInfo({ philosopher }){
  return (
    <Col lg={10} md={9} sm={8} xs={12}
      style={{
        fontSize: '18px',
      }}
    >
      <div
        style={{ padding: '0 10px' }}
      >
      <ProfileBigInfoNameHeader philosopher={philosopher} />
      <ProfileBigInfoDegree philosopher={philosopher} />
      <ProfileBigInfoInstitutions philosopher={philosopher} />
      <ProfileBigInfoIdeas philosopher={philosopher} />
      <ProfileBigInfoDescription philosopher={philosopher} />
      </div>
    </Col>
  );
}

export default ProfileBigInfo;
