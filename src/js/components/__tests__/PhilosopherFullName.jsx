/* eslint-disable no-undef */

import React from 'react';
import renderer from 'react-test-renderer';
import { PhilosopherFullName } from '../PhilosopherFullName';

test('PhilosopherFullName renders correctly', () => {
  const firstName = 'Zachary';
  const lastName = 'Miller';

  const tree = renderer.create(
    <PhilosopherFullName firstName={firstName} lastName={lastName} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
