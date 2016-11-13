import React from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import ProfileListView from './PhilosopherList--ListView__ListItem';

function PhilosopherListListView({ philosophers, viewProfile }) {
  return (
    <Grid>
      <Row>
        {philosophers.map((philosopher, i) =>
          <Col
            key={i} lg={12} md={12} sm={12} xs={12}
            style={{ padding: '5px' }}
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

PhilosopherListListView.propTypes = {
  philosophers: React.PropTypes.array,
  viewProfile: React.PropTypes.func,
};

export default PhilosopherListListView;
