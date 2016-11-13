import React from 'react';
import { HashRouter, Match } from 'react-router';

import Header from './Header';
import PhilosopherList from './PhilosopherList';
import Profile from './Profile';

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        <Match exactly pattern="/" component={PhilosopherList} />
        <Match pattern="/:name" component={Profile} />
      </div>
    </HashRouter>
  );
}

export default App;
