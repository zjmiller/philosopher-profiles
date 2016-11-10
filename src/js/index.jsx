/* eslint-disable no-param-reassign, no-undef */

import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import type { Interest, Philosopher, Store } from './flow-type-aliases/main';

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
      philosophers.map((philosopher): string[] => philosopher.interests);
    const arrOfInterestNames: string[] = flatten(arrOfArrOfInterestNames);
    const arrOfUniqInterestNames: string[] = uniq(arrOfInterestNames);

    const interests: Interest[] = arrOfUniqInterestNames.map((interestName, i) =>
      ({ id: i, name: interestName }));

    philosophers.forEach((philosopher): Philosopher => {
      philosopher.interests = philosopher.interests.map(interestName =>
         interests.find(interest => interest.name === interestName).id
      );
    });

    const data: Store = { interests, philosophers };

    ReactDOM.render(
      <App data={data} interests={data.interests} />,
      document.getElementById('root')
    );
  });
