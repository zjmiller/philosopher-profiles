import React from 'react';
import ProfilesGridView from './ProfilesGridView';
import ProfilesListView from './ProfilesListView';

function Profiles({ philosophers, view, viewProfile }) {
  return (
    <div>
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
  philosophers: React.PropTypes.array,
  view: React.PropTypes.string,
  viewProfile: React.PropTypes.func,
};

export default Profiles;
