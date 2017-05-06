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
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  setTimeout( this.props.fetchSuggestions(event.target.value), 300);
  }

  renderSuggestions(sug, i) {
    return (
      <option key={i} value={sug.display_name} />
    )
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchUser(this.state.term);
    this.setState({
      term: ''
    });
  }

  render() {
    const { error, suggestions } = this.props;
    return (
      <div>
        <form
          className='input-group'
          onSubmit={this.onFormSubmit}>
          <input
            className='form-control'
            placeholder='Search for a Twitch user'
            value={this.state.term}
            onChange={this.onInputChange}
            list='suggestions'
            ref='input'/>
          <span className='input-group-btn'>
            <button className='btn btn-primary'>
              Search
            </button>
          </span>
          <datalist id='suggestions'>
            {suggestions.map(this.renderSuggestions)}
          </datalist>
        </form>

        {error && <div className='alert alert-danger'>{error}</div>}
      </div>
    )
  }
}

function mapStateToProps({ error, suggestions }) {
  return { error, suggestions };
}

export default connect(mapStateToProps, { fetchUser, fetchSuggestions })(SearchBar);
