import React, { Component } from 'react';
import {
  Checkbox,
  ControlLabel,
  FormGroup,
  NavDropdown,
} from 'react-bootstrap';
import getIdOfInterest from '../selectors/getIdOfInterest';
import getNameOfInterest from '../selectors/getNameOfInterest';

class FilterBy extends Component {
  constructor(props) {
    super(props);

    const initialState = {
      gender: [],
      interests: [],
    };

    this.state = initialState;
  }

  handleChange = (type, id) => {
    let newType;
    if (id === 'all') {
      newType = [];
    } else if (this.state[type].indexOf(id) > -1) {
      newType = this.state[type].filter(i => i !== id);
    } else {
      newType = this.state[type].concat(id);
    }

    const newState = Object.assign(
      {},
      this.state,
      { [type]: newType }
    );

    this.props.changeFilterBy(newState);
    this.setState(newState);
  }

  render() {
    const interests = this.props.interests;
    const interestCheckboxes = interests.map((interest, i) =>
      <Checkbox
        key={i}
        onChange={() => this.handleChange('interests', getIdOfInterest(interest))}
        checked={this.state.interests.indexOf(getIdOfInterest(interest)) > -1}
      >
        {getNameOfInterest(interest)}
      </Checkbox>
    );

    interestCheckboxes.unshift(
      <Checkbox
        key={'all'}
        onChange={() => this.handleChange('interests', 'all')}
        checked={this.state.interests.length === 0}
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
              checked={this.state.gender.length === 0}
            >
              All
            </Checkbox>
            <Checkbox
              key={'female'}
              onChange={() => this.handleChange('gender', 'Female')}
              checked={this.state.gender.indexOf('Female') > -1}
            >
              Female
            </Checkbox>
            <Checkbox
              key={'male'}
              onChange={() => this.handleChange('gender', 'Male')}
              checked={this.state.gender.indexOf('Male') > -1}
            >
              Male
            </Checkbox>
          </FormGroup>
        </div>
      </NavDropdown>
    );
  }
}

FilterBy.propTypes = {
  changeFilterBy: React.PropTypes.func,
  interests: React.PropTypes.array,
};

export default FilterBy;
