/* @flow */

import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import getPdfFileNameOfPhilosopher from '../selectors/getPdfFileNameOfPhilosopher';
import getWordFileNameOfPhilosopher from '../selectors/getWordFileNameOfPhilosopher';

function PhilosopherDownloadDocs({ pdfFileName, style, wordFileName }) {
  return (
    <span style={Object.assign({}, style, { whiteSpace: 'nowrap' })}>
      {pdfFileName &&
        <a
          href={`./docs/${pdfFileName}`}
        >
          <Button bsSize="xsmall">
            <Glyphicon glyph="download-alt" />
            {' '}
            <span style={{ fontSize: '14px', fontVariant: 'small-caps' }}>
              pdf
            </span>
          </Button>
        </a>
      }
      {' '}
      {wordFileName &&
        <a
          href={`./docs/${wordFileName}`}
        >
          <Button bsSize="xsmall">
            <Glyphicon glyph="download-alt" />
            {' '}
            <span style={{ fontSize: '14px', fontVariant: 'small-caps' }}>
              word doc
            </span>
          </Button>
        </a>
      }
    </span>
  );
}

PhilosopherDownloadDocs.propTypes = {
  pdfFileName: React.PropTypes.string,
  style: React.PropTypes.object,
  wordFileName: React.PropTypes.string,
};

const mapStateToProps = (state, { philosopher }) => ({
  pdfFileName: getPdfFileNameOfPhilosopher(state, philosopher),
  wordFileName: getWordFileNameOfPhilosopher(state, philosopher),
});

export default connect(mapStateToProps)(PhilosopherDownloadDocs);
