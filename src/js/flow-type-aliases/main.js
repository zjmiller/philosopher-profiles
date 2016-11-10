/* @flow */

export type Interest = {|
  id: number,
  name: string,
|};

export type Era = 'BC'|'BCE'|'AD'|'CE';

export type Philosopher = {|
  id: number,

  name: {|
    first?: string,
    last: string,
  |},

  gender: string,

  img: string,

  birth: {
    era: Era,
    year: number,
  },

  death: {
    era: Era,
    year: number,
  },

  degree: string,

  institutions: string[],

  ideas: string[],

  interests: number[],

  description: string,
|};

export type Store = {
  interests: Interest[],
  philosophers: Philosopher[],
}
