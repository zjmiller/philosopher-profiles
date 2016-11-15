import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

function SubmitProfile() {
  return (
    <Grid>
      <Row style={{ marginBottom: '15px' }}>
        <Col lg={12}>
          <div style={{ marginLeft: '5px' }}>
            To submit a profile, first download the{' '}
            <a href="./docs/BlankTemplate.docx">MS Word template</a>,
            {' '}and then email the completed version to Heather Demarest at{' '}
            <a href="mailto:asdfasdf@asdfasdf.edu">asdfasdf@asdfasdf.edu</a>.
          </div>
        </Col>
      </Row>
    </Grid>
  );
}

export default SubmitProfile;
