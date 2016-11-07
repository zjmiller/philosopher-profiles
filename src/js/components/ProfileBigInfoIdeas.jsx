import React from 'react';

function ProfileBigInfoIdeas({ philosopher }) {
  return (
    <div>
      <span
        style={{
          fontSize: '20px',
          fontWeight: 700,
        }}
      >
        Idea
      </span>
      <ul>
        {philosopher.ideas.map((idea, i) =>
          <li key={i}>{idea}</li>
        )}
      </ul>
    </div>
  );
}

ProfileBigInfoIdeas.propTypes = {
  philosopher: React.PropTypes.object,
};

export default ProfileBigInfoIdeas;
