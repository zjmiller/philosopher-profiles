/* eslint-disable no-undef */

import React from 'react';
import renderer from 'react-test-renderer';
import { PhilosopherDescription__Text } from '../PhilosopherDescription__Text';

test('PhilosopherDescription__Text renders correctly', () => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const tree = renderer.create(
    <PhilosopherDescription__Text text={text} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
