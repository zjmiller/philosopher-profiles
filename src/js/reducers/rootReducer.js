import { combineReducers } from 'redux';
import filterBy from './filterBy';
import sortBy from './sortBy';
import view from './view';

const interests = (state = []) => state;
const philosophers = (state = []) => state;

export default combineReducers({
  filterBy,
  interests,
  philosophers,
  sortBy,
  view,
});
