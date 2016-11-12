function getPhilosopherById(state, id) {
  return state.philosophers.find(philosopher => Number(philosopher.id) === Number(id));
}

export default getPhilosopherById;
