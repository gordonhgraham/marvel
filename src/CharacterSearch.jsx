import React, { Component } from "react";

export default class CharacterSearch extends Component {
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

  handleSearch(event) {
    event.preventDefault();

    // search w/ this.state.searchInput
  }

  render() {
    const { switchToMenu } = this.props;
    return (
      <>
        <h1>Character Search</h1>
        <button onClick={() => switchToMenu()}>Back To Menu</button>
        <form>
          <input
            type="text"
            placeholder="Search a character"
            value={this.state.searchInput}
            onChange={e => {
              this.handleInputChange(e);
            }}
          />
          <button onClick={e => this.handleSearch(e)}>Search</button>
        </form>
      </>
    );
  }
}
