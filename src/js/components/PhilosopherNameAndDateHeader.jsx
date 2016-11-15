import React from 'react';
import PhilosopherDownloadDocs from './PhilosopherDownloadDocs';
import PhilosopherFullName from './PhilosopherFullName';
import PhilosopherTimeAlive from './PhilosopherTimeAlive';

function PhilosopherNameAndDateHeader({ philosopher }) {
  return (
    <h2
      style={{
        fontFamily: 'Helvetica',
        fontWeight: 700,
        marginTop: '1px',
      }}
    >
      <PhilosopherFullName philosopher={philosopher} />
      {' '}
      <PhilosopherDownloadDocs philosopher={philosopher} />
      <br />
      <small style={{ display: 'inline-block', marginLeft: '15px', position: 'relative', top: '-10px' }}>
        <PhilosopherTimeAlive philosopher={philosopher} />
      </small>
    </h2>
  );
}

PhilosopherNameAndDateHeader.propTypes = {
  philosopher: React.PropTypes.object,
};

export default PhilosopherNameAndDateHeader;
