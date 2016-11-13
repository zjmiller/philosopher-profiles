import React from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import ProfileGridView from './PhilosopherList--GridView__ListItem';

function PhilosopherListGridView({ philosophers }) {
  return (
    <Grid>
      <Row>
        {philosophers.map((philosopher, i) =>
          <Col
            style={{ padding: '5px' }}
            key={i}
            lg={2}
            md={3}
            sm={4}
            xs={6}
          >
            <ProfileGridView
              philosopher={philosopher}
            />
          </Col>
        )}
      </Row>
    </Grid>
  );
}

PhilosopherListGridView.propTypes = {
  philosophers: React.PropTypes.array,
};

export default PhilosopherListGridView;
