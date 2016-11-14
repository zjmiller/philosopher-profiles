import React, { Component } from 'react';
import {
  Checkbox,
  ControlLabel,
  FormGroup,
  NavDropdown,
} from 'react-bootstrap';
import { connect } from 'react-redux';

import getFilterBy from '../selectors/getFilterBy';
import getInterests from '../selectors/getInterests';
import getIdOfInterest from '../selectors/getIdOfInterest';
import getNameOfInterest from '../selectors/getNameOfInterest';

class Header__FilterBy extends Component {

  handleChange = (category, filter) => {
    if (filter === 'all') {
      this.props.toggleAllOnFilter(category);
    } else if (category === 'interests') {
      if (this.props.filterBy.interests.indexOf(filter) > -1) {
        this.props.removeFilter(category, filter);
      } else {
        this.props.addFilter(category, filter);
      }
    } else if (category === 'other') {
      if (this.props.filterBy.other.indexOf(filter) > -1) {
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
          this.props.filterBy.interests.indexOf(this.props.getIdOfInterestBound(interest)) > -1
        }
      >
        {this.props.getNameOfInterestBound(interest)}
      </Checkbox>
    );

    interestCheckboxes.unshift(
      <Checkbox
        key={'all'}
        onChange={() => this.handleChange('interests', 'all')}
        checked={this.props.filterBy.interests.length === 0}
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
          <ControlLabel>By Category</ControlLabel>
          <FormGroup>
            <Checkbox
              key={'female'}
              onChange={() => this.handleChange('other', 'Female')}
              checked={this.props.filterBy.other.indexOf('Female') > -1}
            >
              Female
            </Checkbox>
            <Checkbox
              key={'lgbtq'}
              onChange={() => this.handleChange('other', 'LGBTQ')}
              checked={this.props.filterBy.other.indexOf('LGBTQ') > -1}
            >
              LGBTQ
            </Checkbox>
            <Checkbox
              key={'poc'}
              onChange={() => this.handleChange('other', 'Person Of Color')}
              checked={this.props.filterBy.other.indexOf('Person Of Color') > -1}
            >
              Person of Color
            </Checkbox>
          </FormGroup>
        </div>
      </NavDropdown>
    );
  }
}

Header__FilterBy.propTypes = {
  addFilter: React.PropTypes.func,
  filterBy: React.PropTypes.object,
  getIdOfInterestBound: React.PropTypes.func,
  getNameOfInterestBound: React.PropTypes.func,
  interests: React.PropTypes.array,
  removeFilter: React.PropTypes.func,
  toggleAllOnFilter: React.PropTypes.func,
};

const mapStateToProps = state => ({
  filterBy: getFilterBy(state),
  getIdOfInterestBound: getIdOfInterest.bind(this, state),
  getNameOfInterestBound: getNameOfInterest.bind(this, state),
  interests: getInterests(state),
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
