const initialState = {
  interests: [],
  other: [],
};

export default function (state = initialState, action) {
  if (action.type === 'ADD_FILTER') {
    return Object.assign(
      {},
      state,
      { [action.category]: state[action.category].concat(action.newFilter) }
    );
  }

  if (action.type === 'REMOVE_FILTER') {
    return Object.assign(
      {},
      state,
      { [action.category]: state[action.category].filter(
          filter => filter !== action.filterToRemove
        ),
      }
    );
  }

  if (action.type === 'TOGGLE_ALL_ON_FILTER') {
    return Object.assign(
      {},
      state,
      { [action.category]: [] }
    );
  }

  return state;
}
