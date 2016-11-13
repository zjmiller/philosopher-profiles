const sortBy = require('lodash/sortBy');

function yearSortHelper(a, b) {
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
}

function sortPhilosophers(philosophers, userSortOpts) {
  const defaultSortOpts = {
    sortBy: 'LAST_NAME_ASC',
  };

  const sortOpts = Object.assign(
    {},
    defaultSortOpts,
    userSortOpts
  );

  return do {
    if (sortOpts.sortBy === undefined) {
      sortBy(philosophers, o => o.name.last);
    } else if (sortOpts.sortBy === 'LAST_NAME_ASC') {
      sortBy(philosophers, o => o.name.last);
    } else if (sortOpts.sortBy === 'LAST_NAME_DESC') {
      sortBy(philosophers, o => o.name.last).reverse();
    } else if (sortOpts.sortBy === 'YEAR_ASC') {
      philosophers.sort(yearSortHelper);
    } else if (sortOpts.sortBy === 'YEAR_DESC') {
      philosophers.sort(yearSortHelper).reverse();
    }
  };
}

export default sortPhilosophers;
