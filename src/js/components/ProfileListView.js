import React from 'react';

function ProfileListView({ handleClick, philosopher }) {
  return (
    <div
      onClick={handleClick}
    >
      <span
        style={{
          color: '#366',
          cursor: 'pointer',
          fontFamily: 'Helvetica Neue',
          fontSize: '16px',
          fontWeight: 700,
        }}
      >
        {philosopher.name.first}
        {philosopher.name.first ? ' ' : ''}
        {philosopher.name.last}
      </span>
      <br />
      <span
        style={{
          fontSize: '13px',
          marginLeft: '10px',
        }}
      >
        {' '}
        {philosopher.birth.year}
        <span
          style={{
            fontVariant: 'small-caps',
            marginLeft: '2px',
          }}
        >
          {philosopher.birth.era.toLowerCase()}
        </span>
        {' '}–{' '}
        {philosopher.death.year}
        <span
          style={{
            fontVariant: 'small-caps',
            marginLeft: '2px',
          }}
        >
          {philosopher.death.era.toLowerCase()}
        </span>
      </span>
    </div>
  );
}

export default ProfileListView;
