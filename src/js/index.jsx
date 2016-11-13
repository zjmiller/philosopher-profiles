/* eslint-disable no-param-reassign, no-undef */

import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/rootReducer';

const flatten = require('lodash/flatten');
const uniq = require('lodash/uniq');

fetch('./data.yaml')
  .then(response => response.text())
  .then((responseText) => {
    const philosophersWithoutIds = YAML.parse(responseText);

    const philosophers = philosophersWithoutIds.map((philosopher, i) =>
      Object.assign({}, philosopher, { id: i })
    );

    const arrOfArrOfInterestNames =
      philosophers.map((philosopher) => philosopher.interests);
    const arrOfInterestNames = flatten(arrOfArrOfInterestNames);
    const arrOfUniqInterestNames = uniq(arrOfInterestNames);
    const interests = arrOfUniqInterestNames.map((interestName, i) =>
      ({ id: i, name: interestName }));

    philosophers.forEach((philosopher): Philosopher => {
      philosopher.interests = philosopher.interests.map(interestName =>
         interests.find(interest => interest.name === interestName).id
      );
    });

    const preloadedState = {
      interests,
      philosophers,
      view: 'GRID',
    };

    const store = createStore(rootReducer, preloadedState);

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  });
