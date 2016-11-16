import React from 'react';
import PhilosopherDownloadDocs from './PhilosopherDownloadDocs';
import PhilosopherFullName from './PhilosopherFullName';
import PhilosopherTimeAlive from './PhilosopherTimeAlive';

function PhilosopherNameAndDateHeader({ philosopher }) {
  return (
    <div>
      <h2
        style={{
          display: 'inline-block',
          fontFamily: 'Helvetica',
          fontWeight: 700,
          marginBottom: '-5px',
          marginTop: '1px',
        }}
      >
        <PhilosopherFullName philosopher={philosopher} />
      </h2>
      <PhilosopherDownloadDocs
        philosopher={philosopher}
        style={{
          display: 'inline-block',
          marginLeft: '10px',
          marginTop: '10px',
          position: 'relative',
          top: '-5px',
        }}
      />
      <br />
      <span style={{ color: '#777', display: 'inline-block', fontSize: '18px', marginBottom: '5px', marginLeft: '10px', position: 'relative', top: '-5px' }}>
        <PhilosopherTimeAlive philosopher={philosopher} />
      </span>
    </div>
  );
}

PhilosopherNameAndDateHeader.propTypes = {
  philosopher: React.PropTypes.object,
};

export default PhilosopherNameAndDateHeader;
