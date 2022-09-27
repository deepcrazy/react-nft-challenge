import React from "react";
import "./header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt=""></img>
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon}></img>
        </div>
        <input
          className="searchInput"
          placeholder="Collection, item or user ..."
        ></input>
      </div>
    </div>
  );
};

export default Header;
