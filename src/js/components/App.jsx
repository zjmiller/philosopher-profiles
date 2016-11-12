/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Match } from 'react-router';

import Header from './Header';
import Profiles from './Profiles';
import ProfileBig from './ProfileBig';

import getInterests from '../selectors/getInterests';
import getView from '../selectors/getView';

class App extends Component {
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
  interests: React.PropTypes.array,
  view: React.PropTypes.string,
};

const mapStateToProps = state => ({
  interests: getInterests(state),
  view: getView(state),
});

export default connect(mapStateToProps)(App);
