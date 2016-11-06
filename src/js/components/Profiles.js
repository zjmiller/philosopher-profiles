import React from 'react';
import ProfilesGridView from './ProfilesGridView';
import ProfilesListView from './ProfilesListView';

function Profiles({ data, view, viewProfile }) {
  return (
    <div>
      {
        view === 'GRID'
        ?
        <ProfilesGridView
          data={data}
          viewProfile={viewProfile}
        />
        :
        <ProfilesListView
          data={data}
          viewProfile={viewProfile}
        />
      }
    </div>
  );
}

export default Profiles;
