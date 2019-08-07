import React, { Component } from "react";

export default class CharacterSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { switchToMenu } = this.props;
    return (
      <>
        <h1>Character Search</h1>
        <button onClick={() => switchToMenu()}>Back To Menu</button>
      </>
    );
  }
}
