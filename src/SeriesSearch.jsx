import React, { Component } from "react";

export default class SeriesSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { switchToMenu } = this.props;
    return (
      <>
        <h1>Series Search</h1>
        <button onClick={() => switchToMenu()}>Back To Menu</button>
      </>
    );
  }
}
