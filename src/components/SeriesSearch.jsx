import React, { Component } from "react";
import axios from "axios";
import { marvelApiKey } from "../config";
import SearchForm from "./SearchForm";

export default class SeriesSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      displayContent: {
        title: "",
        thumbnail: {}
      }
    };
  }

  handleSearch(searchTerm) {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/series?title=${searchTerm}&apikey=${marvelApiKey}`
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
      title,
      description,
      thumbnail: { path, extension }
    } = this.state.displayContent;
    return (
      <>
        <h1>Series Search</h1>
        <button onClick={() => switchToMenu()}>Back To Menu</button>
        <SearchForm handleSearch={this.handleSearch} />
        <h1>{title}</h1>
        <h3>{description}</h3>
        <img src={`${path}.${extension}`} alt="" style={{ height: 400 }} />
      </>
    );
  }
}
