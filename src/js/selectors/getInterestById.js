import getInterests from './getInterests';

function getInterestById(state, id) {
  const interests = getInterests(state);
  return interests.find(interest => interest.id === id);
}

export default getInterestById;
