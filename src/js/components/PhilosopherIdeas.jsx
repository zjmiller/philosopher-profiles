import React from 'react';
import { connect } from 'react-redux';
import getIdeasOfPhilosopher from '../selectors/getIdeasOfPhilosopher';
import getNameOfIdea from '../selectors/getNameOfIdea';

function PhilosopherIdeas({ getNameOfIdeaBound, ideas }) {
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
        {ideas.map((idea, i) =>
          <li key={i}>{getNameOfIdeaBound(idea)}</li>
        )}
      </ul>
    </div>
  );
}

PhilosopherIdeas.propTypes = {
  getNameOfIdeaBound: React.PropTypes.func,
  ideas: React.PropTypes.array,
};

const mapStateToProps = (state, { philosopher }) => ({
  getNameOfIdeaBound: getNameOfIdea.bind(this, state),
  ideas: getIdeasOfPhilosopher(state, philosopher),
});

export default connect(mapStateToProps)(PhilosopherIdeas);
