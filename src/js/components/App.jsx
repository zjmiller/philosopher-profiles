/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Match } from 'react-router';

import Header from './Header';
import Profiles from './Profiles';
import ProfileBig from './ProfileBig';

import getFilterBy from '../selectors/getFilterBy';
import getInterests from '../selectors/getInterests';
import getSortBy from '../selectors/getSortBy';
import getView from '../selectors/getView';
import getFilteredAndSortedPhilosophers from '../selectors/getFilteredAndSortedPhilosophers';

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
    return (
      <HashRouter>
        <div>
          <Header
            interests={this.props.interests}
            view={this.props.view}
          />
          <Match exactly pattern="/" component={Profiles} />
          <Match pattern="/:name" component={ProfileBig} />
        </div>
      </HashRouter>
    );
  }
}

App.childContextTypes = {
  state: React.PropTypes.object,
};

App.propTypes = {
  data: React.PropTypes.object,
  filterBy: React.PropTypes.object,
  filteredAndSortedPhilosophers: React.PropTypes.array,
  interests: React.PropTypes.array,
  sortBy: React.PropTypes.string,
  view: React.PropTypes.string,
};

const mapStateToProps = state => ({
  data: state,
  filterBy: getFilterBy(state),
  filteredAndSortedPhilosophers: getFilteredAndSortedPhilosophers(state),
  interests: getInterests(state),
  sortBy: getSortBy(state),
  view: getView(state),
});

export default connect(mapStateToProps)(App);
