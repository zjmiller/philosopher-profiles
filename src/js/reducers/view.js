export default function (state = '', action) {
  if (action.type === 'CHANGE_VIEW') {
    return action.view;
  }
  return state;
}
