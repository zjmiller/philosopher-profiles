import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import ProfilesGridView from './PhilosopherList--GridView';
import ProfilesListView from './PhilosopherList--ListView';
import FilteringMsg from './FilteringMsg';

import getFilterBy from '../selectors/getFilterBy';
import getView from '../selectors/getView';
import getFilteredAndSortedPhilosophers from '../selectors/getFilteredAndSortedPhilosophers';

function PhilosopherList({ filterBy, filteredAndSortedPhilosophers, view }) {
  return (
    <div>
      {
        filterBy.other.length > 0 || filterBy.interests.length > 0
        ?
          <Grid>
            <Row>
              <Col lg={12}>
                <FilteringMsg filterBy={filterBy} />
              </Col>
            </Row>
          </Grid>
        :
        ''
      }
      {
        view === 'GRID'
        ?
          <ProfilesGridView
            philosophers={filteredAndSortedPhilosophers}
          />
        :
        <ProfilesListView
          philosophers={filteredAndSortedPhilosophers}
        />
      }
    </div>
  );
}

PhilosopherList.propTypes = {
  filterBy: React.PropTypes.object,
  filteredAndSortedPhilosophers: React.PropTypes.array,
  view: React.PropTypes.string,
};

const mapStateToProps = state => ({
  filterBy: getFilterBy(state),
  filteredAndSortedPhilosophers: getFilteredAndSortedPhilosophers(state),
  view: getView(state),
});

export default connect(mapStateToProps)(PhilosopherList);
