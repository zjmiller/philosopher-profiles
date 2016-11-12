import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import ProfilesGridView from './ProfilesGridView';
import ProfilesListView from './ProfilesListView';
import FilteringMsg from './FilteringMsg';

import getFilterBy from '../selectors/getFilterBy';
import getView from '../selectors/getView';
import getFilteredAndSortedPhilosophers from '../selectors/getFilteredAndSortedPhilosophers';

function Profiles({ filterBy, filteredAndSortedPhilosophers, view }) {
  return (
    <div>
      {
        filterBy.gender.length > 0 || filterBy.interests.length > 0
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

Profiles.propTypes = {
  filterBy: React.PropTypes.object,
  filteredAndSortedPhilosophers: React.PropTypes.array,
  view: React.PropTypes.string,
};

const mapStateToProps = state => ({
  filterBy: getFilterBy(state),
  filteredAndSortedPhilosophers: getFilteredAndSortedPhilosophers(state),
  view: getView(state),
});

export default connect(mapStateToProps)(Profiles);
