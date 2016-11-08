import React from 'react';

function ProfileBigInfoDescriptionText({ text }) {
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

ProfileBigInfoDescriptionText.propTypes = {
  text: React.PropTypes.string,
};

export default ProfileBigInfoDescriptionText;
