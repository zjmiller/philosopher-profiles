import React from 'react';
import getInterestById from '../selectors/getInterestById';
import getNameOfInterest from '../selectors/getNameOfInterest';

function FilteringMsg({ filterBy }, { state }) {
  return (
    <div
      style={{
        color: '#999',
        marginBottom: '20px',
        textAlign: 'center',
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
              .map(id => getInterestById(state, id))
              .map(interest => getNameOfInterest(interest))
              .join(', ')})
            </span>
          </span>
        :
        ''
      }
    </div>
  );
}

FilteringMsg.contextTypes = {
  state: React.PropTypes.object,
};

FilteringMsg.propTypes = {
  filterBy: React.PropTypes.object,
};

export default FilteringMsg;
