import React from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import ProfileGridView from './ProfileGridView';

function ProfilesGridView({ data, viewProfile }) {
  return (
    <Grid>
      <Row>
        {data.map((philosopher, i) =>
          <Col
            style={{padding: '5px'}}
            key={i}
            lg={2}
            md={3}
            sm={4}
            xs={6}
          >
            <ProfileGridView
              handleClick={() => viewProfile(philosopher.id)}
              philosopher={philosopher}
            />
          </Col>
        )}
      </Row>
    </Grid>
  );
}

export default ProfilesGridView;
