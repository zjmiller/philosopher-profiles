import React, { Component } from 'react';
import Header from './Header';
import Profiles from './Profiles';
import ProfileBig from './ProfileBig';
import getInterests from '../selectors/getInterests';
import getPhilosophers from '../selectors/getPhilosophers';
import filterPhilosophers from '../selectors/filterPhilosophers';
import sortPhilosophers from '../selectors/sortPhilosophers';

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
      view: 'LIST',
    });
  }

  enableGridView = () => {
    this.setState({
      profile: undefined,
      view: 'GRID',
    });
  }

  viewProfile = (id) => {
    this.setState({ profile: id });
  }

  leaveProfile = () => {
    this.setState({ profile: undefined });
  }

  changeFilterBy = (filterBy) => {
    this.setState({ filterBy });
  }

  changeSortBy = (newSortBy) => {
    this.setState({ sortBy: newSortBy });
  }

  render() {
    const interests = getInterests(this.props.data);
    const philosophers = getPhilosophers(this.props.data);
    const sortOpts = { sortBy: this.state.sortBy };
    const sortedPhilosophers = sortPhilosophers(philosophers, sortOpts);
    const filterOpts = {
      gender: this.state.filterBy.gender,
      interests: this.state.filterBy.interests,
    };
    const filteredAndSortedPhilosophers =
      filterPhilosophers(sortedPhilosophers, filterOpts);

    return (
      <div>
        <Header
          changeFilterBy={this.changeFilterBy}
          changeSortBy={this.changeSortBy}
          enableGridView={this.enableGridView}
          enableListView={this.enableListView}
          interests={interests}
          view={this.state.view}
        />
        {
          this.state.profile !== undefined
          ?
            <ProfileBig
              leaveProfile={this.leaveProfile}
              philosopher={philosophers[this.state.profile]}
            />
          :
          <Profiles
            philosophers={filteredAndSortedPhilosophers}
            view={this.state.view}
            viewProfile={this.viewProfile}
          />
        }
      </div>
    );
  }
}

App.propTypes = { data: React.PropTypes.shape({}) };

export default App;
