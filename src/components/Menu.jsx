import React from "react";
import logo from "../assets/marvel-logo.jpg";

function renderMenu({ switchToCharacterSearch, switchToSeriesSearch }) {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <button onClick={() => switchToCharacterSearch()}>
        Search By Characters
      </button>
      <button onClick={() => switchToSeriesSearch()}>Search By Series</button>
    </>
  );
}

export default renderMenu;
