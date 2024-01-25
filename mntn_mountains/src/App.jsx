// JSX (App.js)

import React from "react";
import account from "./assets/account.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import arrow_down from "./assets/arrow-down.png";
import slider from "./assets/slider.png";
import one from "./assets/01.png";

const App = () => {
  return (
    <div>
      <nav>
        <div id="logo">MNTN</div>
        <div id="center-links">
          <a id="link1" href="#">
            Equipment
          </a>
          <a id="link2" href="#">
            About Us
          </a>
          <a id="link3" href="#">
            Blog
          </a>
        </div>
        <div id="right-links">
          <a href="#">
            <img src={account} alt="Account" />
          </a>
          <a id="quick-link" href="#">
            Account
          </a>
        </div>
      </nav>
      <header>
        <div id="social-media-container">
          <p>Follow Us</p>

          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
        <div id="textual-info">
          <div className="header-info">
            <div className="rectangular-line"></div>
            <h3>A HIKING GUIDE</h3>
          </div>
          <h1>
            Be Prepared For The
            <br />
            Mountains And Beyond!
          </h1>
          <a href="#scroll-down-button">
            <button className="btn-1">
              scroll down <img src={arrow_down} alt="" />
            </button>
          </a>
        </div>
        <div id="slider">
          <div className="slider-section">
            <a href="#start">Start</a>
          </div>
          <div className="slider-section">
            <a href="#01">01</a>
          </div>
          <div className="slider-section">
            <a href="#02">02</a>
          </div>
          <div className="slider-section">
            <a href="#03">03</a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
