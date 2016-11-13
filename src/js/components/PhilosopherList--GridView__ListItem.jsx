import React from 'react';
import { Link } from 'react-router';
import PhilosopherFullName from './PhilosopherFullName';

function ProfileGridView({ philosopher }) {
  return (
    <Link
      to={`/${philosopher.name.first}${philosopher.name.last}`}
      style={{
        textDecoration: 'none',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          backgroundColor: '#111',
          backgroundImage: `url("imgs/${philosopher.img}")`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          borderRadius: '5px',
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
          <PhilosopherFullName philosopher={philosopher} />
        </div>
      </div>
    </Link>
  );
}

ProfileGridView.propTypes = {
  philosopher: React.PropTypes.object,
};

export default ProfileGridView;
