export default function (state = 'LAST_NAME', action) {
  if (action.type === 'CHANGE_SORT_BY') {
    return action.newSortBy;
  }

  return state;
}
