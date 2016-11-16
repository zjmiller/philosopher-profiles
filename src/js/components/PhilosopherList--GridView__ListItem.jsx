import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import { Link } from 'react-router';
import PhilosopherFullName from './PhilosopherFullName';

const styles = StyleSheet.create({
  basic: {
    alignItems: 'center',
    backgroundColor: 'rgb(242,242,242)',
    backgroundImage: 'linear-gradient(to bottom,rgb(245,245,245) 0,rgb(230,230,230) 100%)',
    border: '1px solid rgba(190,190,190,1)',
    borderRadius: '5px',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.1), 0 4px 8px 0 rgba(0,0,0,0.2)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    height: '200px',
    justifyContent: 'space-between',
    opacity: 1,
    overflow: 'hidden',
    transform: 'scale(1, 1)',
    transition: 'transform 0.2s',
  },

  hover: {
    ':hover': {
      transform: 'scale(1.02, 1.02)',
    },
  },
});

function ListItem({ philosopher }) {
  return (
    <Link
      to={`/philosophers/${philosopher.name.first}${philosopher.name.last}`}
      style={{
        textDecoration: 'none',
      }}
    >
      <div
        className={css(styles.basic, styles.hover)}
      >
        <div
          style={{
            backgroundImage: `url("imgs/${philosopher.img}")`,
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '150px',
            marginTop: '10px',
            overflow: 'hidden',
            width: '90%',
          }}
        />
        <div
          style={{
            borderRadius: '4px',
            color: '#333',
            fontFamily: 'Avenir',
            fontSize: '14px',
            fontWeight: '700',
            marginBottom: '8px',
            textAlign: 'center',
            textShadow: '0 1px 0 #fff',
            whiteSpace: 'nowrap',
            width: '80%',
          }}
        >
          <PhilosopherFullName philosopher={philosopher} />
        </div>
      </div>
    </Link>
  );
}

ListItem.propTypes = {
  philosopher: React.PropTypes.object,
};

export default ListItem;
