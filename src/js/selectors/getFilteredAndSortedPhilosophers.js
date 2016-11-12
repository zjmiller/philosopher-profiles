import filterPhilosophers from './filterPhilosophers';
import sortPhilosophers from './sortPhilosophers';

function getFilteredAndSortedPhilosophers(state) {
  const philosophers = state.philosophers;
  const filterOpts = state.filterBy;
  const filteredPhilosophers = filterPhilosophers(philosophers, filterOpts);
  const sortOpts = { sortBy: state.sortBy };
  const filteredAndSortedPhilosophers = sortPhilosophers(filteredPhilosophers, sortOpts);
  return filteredAndSortedPhilosophers;
}

export default getFilteredAndSortedPhilosophers;
