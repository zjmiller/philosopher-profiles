export default function (state = 'LAST_NAME_ASC', action) {
  if (action.type === 'CHANGE_SORT_BY') {
    return action.newSortBy;
  }

  return state;
}
