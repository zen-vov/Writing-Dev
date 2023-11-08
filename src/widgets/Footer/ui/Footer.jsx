import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="_container">
        <div className="footer__wrapper">
          <div className="footer__name">
            <p>writings.dev</p>
          </div>
          <div className="links">
            <div id="l" className="links__item">
              <img src="/src/assests/Group 18.svg" alt="twitter logo" />
              <p>Follow @writingsdev</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
