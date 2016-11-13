import getInterests from './getInterests';
import getIdOfInterest from './getIdOfInterest';

function getInterestsOfPhilosopher(state, philosopher) {
  const ids = philosopher.interests;
  return (
    getInterests(state)
      .filter(interest => ids.indexOf(getIdOfInterest(state, interest)) > -1)
  );
}

export default getInterestsOfPhilosopher;
