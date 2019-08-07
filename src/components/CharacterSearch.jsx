import React, { Component } from "react";
import axios from "axios";
// import httpRequestAdapter from "../httpRequestAdapter";
import SearchForm from "./SearchForm";
import { marvelApiKey } from "../config";

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
    // const path = "characters";
    // const queryParameters = `name=${searchTerm}`;
    // httpRequestAdapter
    //   .get(path, queryParameters)
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
      thumbnail: { path, extension }
    } = this.state.displayContent;
    return (
      <>
        <h1>Character Search</h1>
        <button onClick={() => switchToMenu()}>Back To Menu</button>
        <SearchForm handleSearch={this.handleSearch} />
        <h1>{name}</h1>
        <h3>{description}</h3>
        <img src={`${path}.${extension}`} alt="" style={{ height: 400 }} />
      </>
    );
  }
}
