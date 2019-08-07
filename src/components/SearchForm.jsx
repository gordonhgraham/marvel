import React, { Component } from "react";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      searchInput: ""
    };
  }

  handleInputChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  render() {
    const { handleSearch } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Search a character"
          value={this.state.searchInput}
          onChange={e => {
            this.handleInputChange(e);
          }}
        />
        <button onClick={() => handleSearch(this.state.searchInput)}>
          Search
        </button>
      </div>
    );
  }
}
