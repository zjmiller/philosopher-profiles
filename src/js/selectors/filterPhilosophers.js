const intersection = require('lodash/intersection');

function filterPhilosophers(philosophers, userFilterOpts) {
  const defaultFilterOpts = {
    interests: [],
    other: [],
  };

  const filterOpts = Object.assign(
    {},
    defaultFilterOpts,
    userFilterOpts
  );

  return philosophers
    .filter((philosopher) => {
      const { other } = filterOpts;
      let survivesFilter = true;
      if (other.length === 0) return true;
      if (other.indexOf('Female') > -1) {
        survivesFilter = survivesFilter && philosopher.gender === 'Female';
      }
      if (other.indexOf('Person Of Color') > -1) {
        survivesFilter = survivesFilter && String(philosopher.poc) === 'true';
      }
      return survivesFilter;
    })
    .filter((philosopher) => {
      const { interests } = filterOpts;
      if (interests.length === 0) return true;
      if (intersection(interests, philosopher.interests).length > 0) return true;
      return false;
    });
}

export default filterPhilosophers;
