import React from 'react';
import getIdeasOfPhilosopher from '../selectors/getIdeasOfPhilosopher';
import getNameOfIdea from '../selectors/getNameOfIdea';

function PhilosopherIdeas({ philosopher }) {
  return (
    <div>
      <span
        style={{
          fontFamily: 'Helvetica',
          fontSize: '20px',
          fontWeight: 700,
        }}
      >
        Ideas
      </span>
      <ul>
        {getIdeasOfPhilosopher(philosopher).map((idea, i) =>
          <li key={i}>{getNameOfIdea(idea)}</li>
        )}
      </ul>
    </div>
  );
}

PhilosopherIdeas.propTypes = {
  philosopher: React.PropTypes.object,
};

export default PhilosopherIdeas;
