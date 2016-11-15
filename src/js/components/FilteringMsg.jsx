import React from 'react';
import { connect } from 'react-redux';

import getInterestById from '../selectors/getInterestById';
import getNameOfInterest from '../selectors/getNameOfInterest';

function FilteringMsg({ filterBy, getInterestByIdBound, getNameOfInterestBound }) {
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
        filterBy.other.length > 0
        ?
          <span>Other{' '}
            <span style={{ color: '#955' }}>
              ({filterBy.other.join(', ')})
            </span>
          </span>
        :
        ''
      }
      {
        filterBy.other.length > 0 && filterBy.interests.length > 0
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
              .map(id => getInterestByIdBound(id))
              .map(interest => getNameOfInterestBound(interest))
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
  getNameOfInterestBound: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  getInterestByIdBound: getInterestById.bind(this, state),
  getNameOfInterestBound: getNameOfInterest.bind(this, state),
});

export default connect(mapStateToProps)(FilteringMsg);
