function getPhilosopherById(philosophers, id) {
  return philosophers.find(philosopher => philosopher.id === id);
}

export default getPhilosopherById;
