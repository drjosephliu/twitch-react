import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
    console.log(this.state.term);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchUser(this.state.term);
    this.setState({
      term: ''
    });
  }

  render() {
    return (
      <div>
        <form
          className='input-group'
          onSubmit={this.onFormSubmit}>
          <input
            className='form-control'
            placeholder='Search for a Twitch user'
            value={this.state.term}
            onChange={this.onInputChange}/>
          <span className='input-group-btn'>
            <button className='btn btn-primary'>
              Search
            </button>
          </span>
        </form>
      </div>
    )
  }
}

export default connect(null, { fetchUser })(SearchBar);
