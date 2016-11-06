import React, { Component } from 'react';
import {
  Checkbox,
  ControlLabel,
  FormGroup,
  NavDropdown,
} from 'react-bootstrap';

class FilterBy extends Component {
  constructor(props) {
    super(props)

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
    }
    else if (this.state[type].indexOf(id) > -1) {
      newType = this.state[type].filter(i => i !== id);
    }
    else {
      newType = this.state[type].concat(id);
    }

    let newState = Object.assign(
      {},
      this.state,
      { [type]: newType }
    );

    this.props.changeFilterBy(newState);
    this.setState(newState);
  }

  render() {
    const interestCheckboxes = this.props.interests.map((interest, i) => {
      return (
        <Checkbox
          key={i}
          onChange={() => this.handleChange('interests', interest.id)}
          checked={this.state.interests.indexOf(interest.id) > -1}
        >
          {interest.name}
        </Checkbox>
      );
    });

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
                checked={this.state.gender.indexOf('Femal') > -1}
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

export default FilterBy;
