import React from "react";
import logo from "./marvel-logo.jpg";

function renderMenu(props) {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <button onClick={() => props.renderCharacterSearch()}>
        Search By Characters
      </button>
      <button onClick={() => props.renderCharacterSearch()}>
        Search By Series
      </button>
    </>
  );
}

export default renderMenu;
