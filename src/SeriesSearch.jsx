import React, { Component } from "react";

export default class SeriesSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>Series Search</h1>
        <button onClick={() => this.props.returnToMenu()}>Back To Menu</button>
      </>
    );
  }
}
