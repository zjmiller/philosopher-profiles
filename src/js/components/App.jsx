import React from 'react';
import { HashRouter, Match } from 'react-router';

import Header from './Header';
import PhilosopherList from './PhilosopherList';
import Profile from './Profile';
import SubmitProfile from './SubmitProfile';

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        <Match exactly pattern="/" component={PhilosopherList} />
        <Match pattern="/philosophers/:name" component={Profile} />
        <Match exactly pattern="/submit" component={SubmitProfile} />
      </div>
    </HashRouter>
  );
}

export default App;
