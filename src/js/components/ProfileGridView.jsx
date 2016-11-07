import React from 'react';

function ProfileGridView({ philosopher, handleClick }) {
  return (
    <div
      onClick={handleClick}
      style={{
        alignItems: 'center',
        backgroundColor: '#111',
        backgroundImage: `url("imgs/${philosopher.img}")`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column-reverse',
        height: '300px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          border: '2px solid #000',
          borderRadius: '4px',
          color: '#000',
          fontFamily: 'Avenir',
          fontSize: '18px',
          fontWeight: '700',
          marginBottom: '10px',
          padding: '2px 6px',
          textAlign: 'center',
          width: '80%',
        }}
      >
        {philosopher.name.first}
        {philosopher.name.first ? ' ' : ''}
        {philosopher.name.last}
      </div>
    </div>
  );
}

ProfileGridView.propTypes = {
  handleClick: React.PropTypes.func,
  philosopher: React.PropTypes.object,
};

export default ProfileGridView;
