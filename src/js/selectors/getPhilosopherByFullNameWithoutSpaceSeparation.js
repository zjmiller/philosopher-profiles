function getPhilosopherByFullNameWithoutSpaceSeparation(state, fullName) {
  const philosophers = state.philosophers;
  return philosophers.find(philosopher =>
    philosopher.name.first + philosopher.name.last === fullName
  );
}

export default getPhilosopherByFullNameWithoutSpaceSeparation;
