/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import getInterestById from '../selectors/getInterestById';
import getNameOfInterest from '../selectors/getNameOfInterest';
import type { Interest } from '../flow-type-aliases/main';

function FilteringMsg({ filterBy, getInterestByIdBound }) {
  return (
    <div
      style={{
        color: '#999',
        marginBottom: '20px',
        marginLeft: '20px',
      }}
    >
      Filtering by{' '}
      {
        filterBy.gender.length > 0
        ?
          <span>Gender{' '}
            <span style={{ color: '#955' }}>
              ({filterBy.gender.join(', ')})
            </span>
          </span>
        :
        ''
      }
      {
        filterBy.gender.length > 0 && filterBy.interests.length > 0
        ?
        ' and '
        :
        ''
      }
      {
        filterBy.interests.length > 0
        ?
          <span>Interests{' '}
            <span style={{ color: '#955' }}>
            ({filterBy.interests
              .map((id: number): Interest => getInterestByIdBound(id))
              .map((interest: Interest): string => getNameOfInterest(interest))
              .join(', ')})
            </span>
          </span>
        :
        ''
      }
    </div>
  );
}

FilteringMsg.propTypes = {
  filterBy: React.PropTypes.object.isRequired,
  getInterestByIdBound: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  getInterestByIdBound: getInterestById.bind(this, state),
});

export default connect(mapStateToProps)(FilteringMsg);
