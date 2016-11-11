/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Profiles from './Profiles';
import ProfileBig from './ProfileBig';

import getFilterBy from '../selectors/getFilterBy';
import getInterests from '../selectors/getInterests';
import getPhilosophers from '../selectors/getPhilosophers';
import getPhilosopherById from '../selectors/getPhilosopherById';
import getSortBy from '../selectors/getSortBy';
import getView from '../selectors/getView';
import filterPhilosophers from '../selectors/filterPhilosophers';
import sortPhilosophers from '../selectors/sortPhilosophers';

import type { Interest, Philosopher } from '../flow-type-aliases/main';

class App extends Component {
  state: Object;

  constructor(props: Object) {
    super(props);
    const initialState = {
      profile: undefined,
    };

    this.state = initialState;
  }

  viewProfile = (id: number) => {
    this.setState({ profile: id });
  }

  leaveProfile = () => {
    this.setState({ profile: undefined });
  }

  render() {
    const interests: Interest[] = getInterests(this.props.data);
    const philosophers: Philosopher[] = getPhilosophers(this.props.data);
    const sortOpts = { sortBy: this.props.sortBy };
    const sortedPhilosophers: Philosopher[] = sortPhilosophers(philosophers, sortOpts);
    const filterOpts = {
      gender: this.props.filterBy.gender,
      interests: this.props.filterBy.interests,
    };
    const filteredAndSortedPhilosophers: Philosopher[] =
      filterPhilosophers(sortedPhilosophers, filterOpts);

    return (
      <div>
        <Header
          interests={interests}
          view={this.props.view}
        />
        {
          this.state.profile !== undefined
          ?
            <ProfileBig
              leaveProfile={this.leaveProfile}
              philosopher={getPhilosopherById(philosophers, this.state.profile)}
            />
          :
          <Profiles
            filterBy={this.props.filterBy}
            philosophers={filteredAndSortedPhilosophers}
            view={this.props.view}
            viewProfile={this.viewProfile}
          />
        }
      </div>
    );
  }
}

App.childContextTypes = {
  state: React.PropTypes.object,
};

App.propTypes = {
  data: React.PropTypes.object,
  filterBy: React.PropTypes.object,
  sortBy: React.PropTypes.string,
  view: React.PropTypes.string,
};

const mapStateToProps = state => ({
  data: state,
  filterBy: getFilterBy(state),
  sortBy: getSortBy(state),
  view: getView(state),
});

export default connect(mapStateToProps)(App);
