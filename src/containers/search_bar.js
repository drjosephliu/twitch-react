import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchSuggestions } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.renderSuggestions = this.renderSuggestions.bind(this);
  }

  onInputChange(event) {
    console.log('event:', event.target.value);
    this.setState({
      term: event.target.value
    });
  setTimeout(this.props.fetchSuggestions(event.target.value), 300);
  }

  renderSuggestions(sug) {
    return (
      <option key={sug.display_name} value={sug.display_name} />
    )
  }

  onFormSubmit(event) {
    console.log('event!');
    event.preventDefault();
    this.props.fetchUser(this.state.term);
    this.setState({
      term: ''
    });
  }

  render() {
    const { suggestions } = this.props;
    return (
        <form
          className='input-group'
          onSubmit={this.onFormSubmit}>
          <input
            className='form-control'
            placeholder='Search for a Twitch user'
            value={this.state.term}
            onChange={this.onInputChange}
            list='suggestions'/>
          <span className='input-group-btn'>
            <button type='submit' className='btn btn-primary'>
              Search
            </button>
          </span>
          <datalist id='suggestions'>
            {suggestions.map(this.renderSuggestions)}
          </datalist>
        </form>
    )
  }
}

function mapStateToProps({ suggestions }) {
  return { suggestions };
}

export default connect(mapStateToProps, { fetchUser, fetchSuggestions })(SearchBar);
