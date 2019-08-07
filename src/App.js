import React, { Component } from "react";
import Menu from "./Menu";
import CharacterSearch from "./CharacterSearch";
import SeriesSearch from "./SeriesSearch";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.switchToMenu = this.switchToMenu.bind(this);
    this.switchToCharacterSearch = this.switchToCharacterSearch.bind(this);
    this.switchToSeriesSearch = this.switchToSeriesSearch.bind(this);
    this.state = { selectedComponent: "menu" };
  }

  switchToMenu() {
    this.setState({ selectedComponent: "menu" });
  }

  switchToCharacterSearch() {
    this.setState({ selectedComponent: "characterSearch" });
  }

  switchToSeriesSearch() {
    this.setState({ selectedComponent: "seriesSearch" });
  }

  renderContent() {
    const { selectedComponent } = this.state;
    switch (selectedComponent) {
      case "characterSearch":
        return <CharacterSearch switchToMenu={this.switchToMenu} />;
      case "seriesSearch":
        return <SeriesSearch switchToMenu={this.switchToMenu} />;
      case "menu":
      default:
        return (
          <Menu
            switchToCharacterSearch={this.switchToCharacterSearch}
            switchToSeriesSearch={this.switchToSeriesSearch}
          />
        );
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">{this.renderContent()}</header>
      </div>
    );
  }
}

export default App;
