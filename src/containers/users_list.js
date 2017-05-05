import React, { Component } from 'react';
import { connect } from 'react-redux';

class UsersList extends Component {
  render() {
    console.log('props:', this.props.users)
    return (
      <div>Users List</div>
    )
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(UsersList);
