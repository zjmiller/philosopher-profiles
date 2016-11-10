/* @flow */

import type { Interest } from '../flow-type-aliases/main';

function getNameOfInterest(interest: Interest): string {
  return interest.name;
}

export default getNameOfInterest;
