import React from "react";
import "./header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt=""></img>
      </div>
    </div>
  );
};

export default Header;
