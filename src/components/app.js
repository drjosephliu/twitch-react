import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../containers/search_bar';
import SelectedUser from '../containers/selected_user';
import UsersList from '../containers/users_list';

class App extends Component {
  render() {
    const { error } = this.props;
    return(
      <div>
      <div className='page-heading'>
          <h1>Twitch</h1>
          <SearchBar />
      </div>
      {error && <div className='alert alert-danger'>{error}</div>}
      <div className='container-fluid'>
        <SelectedUser />
        <UsersList />
      </div>
    </div>
    )
  }
}

function mapStateToProps({ selectedUser, users, error }) {
  return { selectedUser, users, error };
}

export default connect(mapStateToProps)(App);
