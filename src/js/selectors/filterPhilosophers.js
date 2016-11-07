const intersection = require('lodash/intersection');

function filterPhilosophers(philosophers, userFilterOpts) {
  const defaultFilterOpts = {
    gender: [],
    interests: [],
  };

  const filterOpts = Object.assign(
    {},
    defaultFilterOpts,
    userFilterOpts
  );

  return philosophers
    .filter((philosopher) => {
      const { gender } = filterOpts;
      if (gender.length === 0) return true;
      if (gender.indexOf(philosopher.gender) > -1) return true;
      return false;
    })
    .filter((philosopher) => {
      const { interests } = filterOpts;
      if (interests.length === 0) return true;
      if (intersection(interests, philosopher.interests).length > 0) return true;
      return false;
    });
}

export default filterPhilosophers;
