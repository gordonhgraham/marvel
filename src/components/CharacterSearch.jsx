import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import { marvelApiKey } from "../config";
import { log } from "handlebars";

export default class CharacterSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      displayContent: {
        name: "",
        description: "",
        thumbnail: {}
      }
    };
  }

  handleSearch(searchTerm) {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?name=${searchTerm}&apikey=${marvelApiKey}`
      )
      .then(res => {
        this.setState({ displayContent: res.data.data.results[0] });
      })
      .catch(error => {
        console.log("<=> <=><=> <=> <=> <=><=> <=> <=> <=><=> <=>");
        console.log("bummer, an error... ", error);
        console.log("<=> <=><=> <=> <=> <=><=> <=> <=> <=><=> <=>");
      });
  }

  render() {
    const { switchToMenu } = this.props;
    const {
      name,
      description,
      thumbnail,
      thumbnail: { path, extension }
    } = this.state.displayContent;
    return (
      <>
        <h1>Character Search</h1>
        <button onClick={() => switchToMenu()}>Back To Menu</button>
        <SearchForm handleSearch={this.handleSearch} />
        <h1>{name}</h1>
        <h3>{description}</h3>
      </>
    );
  }
}

// {thumbnail.length > 0 ? (
//   <img src={`${path}.${extension}`} className="App-logo" alt="logo" />
//     ) : null}
