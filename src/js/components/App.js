import React, { Component } from 'react';
import Header from './Header';
import Profiles from './Profiles';
import ProfileBig from './ProfileBig';
const sortBy = require('lodash/sortBy');
const intersection = require('lodash/intersection');

class App extends Component {
  constructor(props) {
    super(props);
    const initialState = {
      view: 'LIST',
      profile: undefined,
      filterBy: {
        gender: [],
        interests: [],
      },
      sortBy: undefined,
    };

    this.state = initialState;
  }

  enableListView = () => {
    this.setState({
      profile: undefined,
      view: 'LIST'
    });
  }

  enableGridView = () => {
    this.setState({
      profile: undefined,
      view: 'GRID'
    });
  }

  viewProfile = id => {
    this.setState({ profile: id });
  }

  leaveProfile = () => {
    this.setState({ profile: undefined });
  }

  changeFilterBy = filterBy => {
    this.setState({ filterBy });
  }

  changeSortBy = sortBy => {
    this.setState({ sortBy });
  }

  render() {
    const sortedData = do {
      if (this.state.sortBy === undefined) {
        sortBy(this.props.data.philosophers, o => o.name.last);
      }
      else if (this.state.sortBy === 'LAST_NAME') {
        sortBy(this.props.data.philosophers, o => o.name.last);
      }
      else if (this.state.sortBy === 'YEAR') {
        this.props.data.philosophers.sort((a, b) => {
          if (a.birth.era.match(/BC|BCE/) && b.birth.era.match(/BC|BCE/)) {
            if (a.birth.year > b.birth.year) return -1;
            if (a.birth.year === b.birth.year) return 0;
            return 1;
          }
          if (!a.birth.era.match(/BC|BCE/) && !b.birth.era.match(/BC|BCE/)) {
            if (a.birth.year < b.birth.year) return -1;
            if (a.birth.year === b.birth.year) return 0;
            return 1;
          }
          if (a.birth.era.match(/BC|BCE/)) return -1;
          return 0;
        });
      }
    }

    const filteredAndSortedData = sortedData
      .filter(philosopher => {
        const { gender } = this.state.filterBy;
        if (gender.length === 0) return true;
        if (gender.indexOf(philosopher.gender) > -1) return true;
        return false;
      })
      .filter(philosopher => {
        const { interests } = this.state.filterBy;
        if (interests.length === 0) return true;
        if (intersection(interests, philosopher.interests).length > 0) return true;
        return false;
      });

    return (
      <div>
        <Header
          changeFilterBy={this.changeFilterBy}
          changeSortBy={this.changeSortBy}
          enableGridView={this.enableGridView}
          enableListView={this.enableListView}
          interests={this.props.interests}
          view={this.state.view}
        />
      {
        this.state.profile !== undefined
        ?
        <ProfileBig
          leaveProfile={this.leaveProfile}
          philosopher={this.props.data.philosophers[this.state.profile]}
        />
        :
        <Profiles
          data={filteredAndSortedData}
          view={this.state.view}
          viewProfile={this.viewProfile}
        />
      }
      </div>
    );
  }
}

export default App;
