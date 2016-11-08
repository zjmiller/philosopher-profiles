import React from 'react';
import ProfilesGridView from './ProfilesGridView';
import ProfilesListView from './ProfilesListView';
import FilteringMsg from './FilteringMsg';

function Profiles({ filterBy, philosophers, view, viewProfile }) {
  return (
    <div>
      {
        filterBy.gender.length > 0 || filterBy.interests.length > 0
        ?
          <FilteringMsg filterBy={filterBy} />
        :
        ''
      }
      {
        view === 'GRID'
        ?
          <ProfilesGridView
            philosophers={philosophers}
            viewProfile={viewProfile}
          />
        :
        <ProfilesListView
          philosophers={philosophers}
          viewProfile={viewProfile}
        />
      }
    </div>
  );
}

Profiles.propTypes = {
  filterBy: React.PropTypes.object,
  philosophers: React.PropTypes.array,
  view: React.PropTypes.string,
  viewProfile: React.PropTypes.func,
};

export default Profiles;
