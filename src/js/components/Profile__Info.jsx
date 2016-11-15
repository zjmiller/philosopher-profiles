import React from 'react';
import { Col } from 'react-bootstrap';
import PhilosopherDegree from './PhilosopherDegree';
import PhilosopherDescription from './PhilosopherDescription';
import PhilosopherIdeas from './PhilosopherIdeas';
import PhilosopherInstitutions from './PhilosopherInstitutions';
import PhilosopherInterests from './PhilosopherInterests';
import PhilosopherNameAndDateHeader from './PhilosopherNameAndDateHeader';

function Profile__Info({ philosopher }) {
  return (
    <Col
      lg={10} md={9} sm={8} xs={12}
      style={{
        fontFamily: 'Georgia',
        fontSize: '18px',
        fontWeight: '400',
      }}
    >
      <div
        style={{ padding: '0 10px' }}
      >
        <PhilosopherNameAndDateHeader philosopher={philosopher} />
        <PhilosopherDegree philosopher={philosopher} />
        <PhilosopherInstitutions philosopher={philosopher} />
        <PhilosopherIdeas philosopher={philosopher} />
        <PhilosopherInterests philosopher={philosopher} />
        <PhilosopherDescription philosopher={philosopher} />
      </div>
    </Col>
  );
}

Profile__Info.propTypes = {
  philosopher: React.PropTypes.object,
};

export default Profile__Info;
