import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlipMove from 'react-flip-move';
import { selectUser, fetchUser, removeUser } from '../actions/index';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'all',
    };
    this.fetchInitialUsers(this.props.initialUsers);
  }

  fetchInitialUsers(users) {
    users.map(this.props.fetchUser);
  }

  renderUser(user) {
    const { channelData, streamData } = user;
    return (
      <tr
        key={channelData.display_name}>
        <td className='list-item' onClick={() => this.props.selectUser(user)}>
          <img src={channelData.logo} className='user-logo' />
        </td>
        <td className='list-item' onClick={() => this.props.selectUser(user)}>
          {channelData.display_name}
        </td>
        <td className='status'>
          {streamData.stream ?
            <span className='online'></span> :
            <span className='offline'></span>}
            <span
              className="glyphicon glyphicon-remove"
              onClick={() => this.props.removeUser(user)}></span>
        </td>

      </tr>
    )
  }

  showOnline() {
    this.setState({
      show: 'online'
    });
  }

  showOffline() {
    this.setState({
      show: 'offline'
    });
  }

  showAll() {
    this.setState({
      show: 'all'
    });
  }

  render() {
    return (
      <div className='users-list'>
          <div className='btn-group' role='group'>
            <button
              className='btn btn-default'
              onClick={this.showAll.bind(this)}>
              All
            </button>
            <button
              className='btn btn-default'
              onClick={this.showOnline.bind(this)}>
              Online
            </button>
            <button
              className='btn btn-default'
              onClick={this.showOffline.bind(this)}>
              Offline
            </button>
        </div>
        {/* <table className='table table-hover'>
          <thead>
            <tr>
              <th>Logo</th>
              <th>Channel</th>
              <th>Status</th>
            </tr>
          </thead> */}
          {/* <tbody> */}
            {/* <FlipMove
              typeName='tbody' enterAnimation='fade'
              leaveAnimation='fade'>
              {this.props.users.filter(user => {
                const { show } = this.state;
                const { streamData } = user;
                if (show == 'online') {
                  return streamData.stream;
                }
                else if (show == 'offline') {
                  return !streamData.stream;
                }
                else {
                  return user;
                }
              }).map(this.renderUser.bind(this))}
            </FlipMove> */}
            <div className='table-scroll'>
            <FlipMove
              typeName='table'
              className='table table-hover'
              enterAnimation='fade'
              leaveAnimation='fade'>
              <tr>
                <th>Logo</th>
                <th>Channel</th>
                <th>Status</th>
              </tr>
              {this.props.users.filter(user => {
                const { show } = this.state;
                const { streamData } = user;
                if (show == 'online') {
                  return streamData.stream;
                }
                else if (show == 'offline') {
                  return !streamData.stream;
                }
                else {
                  return user;
                }
              }).map(this.renderUser.bind(this))}
            </FlipMove>
          </div>
          {/* </tbody> */}
        {/* </table> */}
      </div>
    )
  }
}

function mapStateToProps({ users, initialUsers }) {
  return { users, initialUsers };
}

export default connect(mapStateToProps, { selectUser, fetchUser, removeUser })(UsersList);
