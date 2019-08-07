import React, { Component } from "react";
import SearchForm from "./SearchForm";

export default class CharacterSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      displayContent: ""
    };
  }

  handleSearch(searchTerm) {
    // do axios request logic here (maybe start w/ request-promise & switch to axios)
    // need to use search Term as a query parameter

    return this.setState({ displayContent: searchTerm });
  }

  render() {
    const { switchToMenu } = this.props;
    return (
      <>
        <h1>Character Search</h1>
        <button onClick={() => switchToMenu()}>Back To Menu</button>
        <SearchForm handleSearch={this.handleSearch} />
        <h3>axios request w/ following params:</h3>
        <h1>{this.state.displayContent || "..."}</h1>
      </>
    );
  }
}
