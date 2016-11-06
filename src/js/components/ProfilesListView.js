import React from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import ProfileListView from './ProfileListView';

function ProfilesListView({ data, viewProfile }) {
  return (
    <Grid>
      <Row>
        {data.map((philosopher, i) =>
          <Col key={i} lg={12} md={12} sm={12} xs={12}
            style={{padding: '5px'}}
          >
            <ProfileListView
              handleClick={() => viewProfile(philosopher.id)}
              philosopher={philosopher}
            />
          </Col>
        )}
      </Row>
    </Grid>
  );
}

export default ProfilesListView;
