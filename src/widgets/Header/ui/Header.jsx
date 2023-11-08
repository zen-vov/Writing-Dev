import React from "react";
import Logo from "../../../app/assets/Logo.svg";
//const logo = require("../../app/lib/assets/Logo.svg").default;

function Header() {
  return (
    <header className="header">
      <div className="_container">
        <div className="header__nav">
          <div className="header__name">
            <p>writings.dev</p>
          </div>
          <div className="header__menu">
            <ul>
              <li>categories</li>
              <li>articles</li>
              <li>about</li>
            </ul>
          </div>
        </div>
        <div className="header__content">
          <div className="header__logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="header__slogan">
            <h1>Writings for Developers</h1>
            <p>Curated collection of articles for busy developers</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
