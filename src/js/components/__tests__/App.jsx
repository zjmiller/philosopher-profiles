/* eslint-disable no-param-reassign, no-undef */

import fs from 'fs';
import path from 'path';
import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import YAML from 'js-yaml';
import App from '../App';
import rootReducer from '../../reducers/rootReducer';

const flatten = require('lodash/flatten');
const uniq = require('lodash/uniq');

jest.mock('react-dom');

test('App renders correctly', () => {
  const responseText = fs.readFileSync(path.resolve('./dest/data.yaml'), 'utf8');
  const philosophersWithoutIds = YAML.safeLoad(responseText);

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

  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
