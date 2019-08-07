import React, { Component } from "react";
import Menu from "./Menu";
import CharacterSearch from "./CharacterSearch";
import SeriesSearch from "./SeriesSearch";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.selectNewComponent = this.selectNewComponent.bind(this);
    this.state = { selectedComponent: "menu" };
  }

  selectNewComponent(newSelection) {
    this.setState({ selectedComponent: newSelection });
  }

  renderContent() {
    const { selectedComponent } = this.state;
    switch (selectedComponent) {
      case "characterSearch":
        return (
          <CharacterSearch
            returnToMenu={() => this.selectNewComponent("menu")}
          />
        );
      case "seriesSearch":
        return (
          <SeriesSearch returnToMenu={() => this.selectNewComponent("menu")} />
        );
      case "menu":
      default:
        return (
          <Menu
            renderCharacterSearch={() =>
              this.selectNewComponent("characterSearch")
            }
            renderSeriesSearch={() => this.selectNewComponent("SeriesSearch")}
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

// const marvelUrl = `https://gateway.marvel.com:443/v1/public/characters?name=thanos&apikey=${apiKey}`;

// const marvelClient = axios.create({
//   method: "GET",
//   baseURL: marvelUrl
// });

// function getCharacters() {
//   marvelClient.get().then(res => {
//     console.log("<=> <=><=> <=> <=> <=><=> <=> <=> <=><=> <=>");
//     console.log("res.data: ", res.data);
//     console.log("<=> <=><=> <=> <=> <=><=> <=> <=> <=><=> <=>");
//   });
// }

// eslint-disable-next-line no-lone-blocks
{
  /* <img src={logo} className="App-logo" alt="logo" />
        <img
          src={"http://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd.jpg"}
          className="App-logo"
          alt="logo"
        />
        <button onClick={() => getCharacters()}>
          Click here for a random marvel character
        </button> */
}
