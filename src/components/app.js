import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../containers/search_bar';
import SelectedUser from '../containers/selected_user';
import UsersList from '../containers/users_list';

class App extends Component {
  render() {
    return(
      <div>
      <div className='container-fluid page-heading'>
        <div className='col-sm-3'>
          <h1>Twitch</h1>
        </div>
        <div className='col-sm-9'>
          <SearchBar />
        </div>
      </div>
      <div className='container'>

        <SelectedUser />
        <UsersList />
      </div>
    </div>
    )
  }
}

function mapStateToProps({ selectedUser, users }) {
  return { selectedUser, users };
}

export default connect(mapStateToProps)(App);
