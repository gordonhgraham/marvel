import React, { Component } from "react";

export default class CharacterSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>Character Search</h1>
        <button onClick={() => this.props.returnToMenu()}>Back To Menu</button>
      </>
    );
  }
}
