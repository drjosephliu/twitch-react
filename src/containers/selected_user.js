import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedUser extends Component {
  render() {

    if (this.props.selectedUser == null) {
      var name = 'freecodecamp';
    }
    else {
      var { name } = this.props.selectedUser.channelData;
    }
    const stream_url = `https://player.twitch.tv/?muted=true&channel=${name}`;

    return(
      <div className='stream-detail'>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe
              src={stream_url}
              className='embed-responsive-item'
              scrolling="no"
              allowFullScreen="true">
          </iframe>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ selectedUser }){
  return { selectedUser };
}

export default connect(mapStateToProps)(SelectedUser);
