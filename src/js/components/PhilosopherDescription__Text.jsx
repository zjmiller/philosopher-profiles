import React from 'react';

export function PhilosopherDescription__Text({ text }) {
  return (
    <div>
      {text.split(/[\n\r]/g).map((chunk, i) =>
        <p
          key={i}
          style={{
            margin: '10px',
            marginTop: i === 0 ? '0px' : '10px',
          }}
        >
          {chunk}
        </p>
      )}
    </div>
  );
}

PhilosopherDescription__Text.propTypes = {
  text: React.PropTypes.string,
};

export default PhilosopherDescription__Text;
