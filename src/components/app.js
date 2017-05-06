import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../containers/search_bar';
import SelectedUser from '../containers/selected_user';
import UsersList from '../containers/users_list';

class App extends Component {
  render() {
    return(
      <div className='container'>
        <h1>Twitch API Widget</h1>
        <SearchBar />
        <SelectedUser />
        <UsersList />
      </div>
    )
  }
}

function mapStateToProps({ selectedUser, users }) {
  return { selectedUser, users };
}

export default connect(mapStateToProps)(App);
