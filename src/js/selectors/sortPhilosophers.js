const sortBy = require('lodash/sortBy');

function sortPhilosophers(philosophers, userSortOpts) {
  const defaultSortOpts = {
    sortBy: 'LAST_NAME',
  };

  const sortOpts = Object.assign(
    {},
    defaultSortOpts,
    userSortOpts
  );

  return do {
    if (sortOpts.sortBy === undefined) {
      sortBy(philosophers, o => o.name.last);
    } else if (sortOpts.sortBy === 'LAST_NAME') {
      sortBy(philosophers, o => o.name.last);
    } else if (sortOpts.sortBy === 'YEAR') {
      philosophers.sort((a, b) => {
        if (a.birth.era.match(/BC|BCE/) && b.birth.era.match(/BC|BCE/)) {
          if (a.birth.year > b.birth.year) return -1;
          if (a.birth.year === b.birth.year) return 0;
          return 1;
        }
        if (!a.birth.era.match(/BC|BCE/) && !b.birth.era.match(/BC|BCE/)) {
          if (a.birth.year < b.birth.year) return -1;
          if (a.birth.year === b.birth.year) return 0;
          return 1;
        }
        if (a.birth.era.match(/BC|BCE/)) return -1;
        return 0;
      });
    }
  };
}

export default sortPhilosophers;
