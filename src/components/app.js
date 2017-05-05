import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import Stream from '../containers/stream';
import UsersList from '../containers/users_list';

export default class App extends Component {
  render() {
    return(
      <div className='container'>
        <h1>Twitch API Widget</h1>
        <SearchBar />
        <Stream />
        <UsersList />
      </div>
    )
  }
}
