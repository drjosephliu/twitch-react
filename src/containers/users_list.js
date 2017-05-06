import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser, showOnline, showOffline, showAll } from '../actions/index';

class UsersList extends Component {

  renderUser(user) {
    const { channelData, streamData } = user;

    return (
      <tr
        key={channelData.display_name}
        onClick={() => this.props.selectUser(user)}
        className='list-item'>
        <td>
          <img src={channelData.logo} className='user-logo' />
        </td>
        <td>
          {channelData.display_name}
        </td>
        <td>
          {streamData.stream ?
            <span className='online'>Online</span> :
            <span className='offline'>Offline</span>}
        </td>
      </tr>
    )
  }

  render() {
    console.log('state:', this.props.users);
    return (
      <div className='col-sm-4'>
        <div className='text-center'>
          <div className='btn-group btn-group-sm' role='group'>
            <button
              className='btn btn-default'
              onClick={this.props.showAll}>
              All
            </button>
            <button
              className='btn btn-default'
              onClick={this.props.showOnline}>
              Online
            </button>
            <button
              className='btn btn-default'
              onClick={this.props.showOffline}>
              Offline
            </button>
          </div>
        </div>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Logo</th>
              <th>Channel</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(this.renderUser.bind(this))}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps, { selectUser, showOnline, showOffline, showAll })(UsersList);
