import React, { Component } from 'react';
import {
  Checkbox,
  ControlLabel,
  FormGroup,
  NavDropdown,
} from 'react-bootstrap';
import { connect } from 'react-redux';

import getGenderFilterInfo from '../selectors/getGenderFilterInfo';
import getInterests from '../selectors/getInterests';
import getInterestsFilterInfo from '../selectors/getInterestsFilterInfo';
import getIdOfInterest from '../selectors/getIdOfInterest';
import getNameOfInterest from '../selectors/getNameOfInterest';

class Header__FilterBy extends Component {

  handleChange = (category, filter) => {
    if (filter === 'all') {
      this.props.toggleAllOnFilter(category);
    } else if (category === 'interests') {
      if (this.props.interestsFilterInfo.indexOf(filter) > -1) {
        this.props.removeFilter(category, filter);
      } else {
        this.props.addFilter(category, filter);
      }
    } else if (category === 'gender') {
      if (this.props.genderFilterInfo.indexOf(filter) > -1) {
        this.props.removeFilter(category, filter);
      } else {
        this.props.addFilter(category, filter);
      }
    }
  }

  render() {
    const interests = this.props.interests;
    const interestCheckboxes = interests.map((interest, i) =>
      <Checkbox
        key={i}
        onChange={() => this.handleChange('interests', this.props.getIdOfInterestBound(interest))}
        checked={
          this.props.interestsFilterInfo.indexOf(this.props.getIdOfInterestBound(interest)) > -1
        }
      >
        {this.props.getNameOfInterestBound(interest)}
      </Checkbox>
    );

    interestCheckboxes.unshift(
      <Checkbox
        key={'all'}
        onChange={() => this.handleChange('interests', 'all')}
        checked={this.props.interestsFilterInfo.length === 0}
      >
        All
      </Checkbox>
    );

    return (
      <NavDropdown eventKey={4} title="Filter By" id="basic-nav-dropdown">
        <div style={{ padding: '10px', minWidth: '300px' }}>
          <ControlLabel>By Interest</ControlLabel>
          <FormGroup>
            { interestCheckboxes }
          </FormGroup>
          <ControlLabel>By Gender</ControlLabel>
          <FormGroup>
            <Checkbox
              key={'allGender'}
              onChange={() => this.handleChange('gender', 'all')}
              checked={this.props.genderFilterInfo.length === 0}
            >
              All
            </Checkbox>
            <Checkbox
              key={'female'}
              onChange={() => this.handleChange('gender', 'Female')}
              checked={this.props.genderFilterInfo.indexOf('Female') > -1}
            >
              Female
            </Checkbox>
            <Checkbox
              key={'male'}
              onChange={() => this.handleChange('gender', 'Male')}
              checked={this.props.genderFilterInfo.indexOf('Male') > -1}
            >
              Male
            </Checkbox>
          </FormGroup>
        </div>
      </NavDropdown>
    );
  }
}

Header__FilterBy.propTypes = {
  addFilter: React.PropTypes.func,
  genderFilterInfo: React.PropTypes.array,
  getIdOfInterestBound: React.PropTypes.func,
  getNameOfInterestBound: React.PropTypes.func,
  interests: React.PropTypes.array,
  interestsFilterInfo: React.PropTypes.array,
  removeFilter: React.PropTypes.func,
  toggleAllOnFilter: React.PropTypes.func,
};

const mapStateToProps = state => ({
  getIdOfInterestBound: getIdOfInterest.bind(this, state),
  getNameOfInterestBound: getNameOfInterest.bind(this, state),
  genderFilterInfo: getGenderFilterInfo(state),
  interests: getInterests(state),
  interestsFilterInfo: getInterestsFilterInfo(state),
});

const mapDispatchToProps = dispatch => ({
  addFilter: (category, newFilter) => dispatch({
    type: 'ADD_FILTER',
    category,
    newFilter,
  }),

  removeFilter: (category, filterToRemove) => dispatch({
    type: 'REMOVE_FILTER',
    category,
    filterToRemove,
  }),

  toggleAllOnFilter: category => dispatch({
    type: 'TOGGLE_ALL_ON_FILTER',
    category,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header__FilterBy);
