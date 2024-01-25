// JSX (App.js)

import React from "react";
import account from "./assets/account.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import arrow_right from "./assets/arrow-right.png";
import arrow_down from "./assets/arrow-down.png";
import slider from "./assets/slider.png";
import one from "./assets/01.png";
import two from "./assets/02.png";
import three from "./assets/03.png";

const App = () => {
  return (
    <>
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
            <a href="#01">
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
        <div id="01" className="content-section-1">
          <div className="content-text-1">
            <div className="large-text-1">01</div>
            <div className="overlay-text-1">
              <div className="rectangular-line-1"></div>
              <p className="get-started" style={{ color: "#fbd784" }}>
                GET STARTED
              </p>
            </div>
            <h2>What level of hiker are you?</h2>
            <p>
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
            <button className="read-more-1">
              read more <img src={arrow_right} alt="" />
            </button>
          </div>
          <div className="image-container-1">
            <img src={one} alt="01" />
          </div>
        </div>
        <div id="02" className="content-section-2">
          <div className="image-container-2">
            <img src={two} alt="02" />
          </div>
          <div className="content-text-2">
            <div className="large-text-2">02</div>
            <div className="overlay-text-2">
              <div className="rectangular-line-2"></div>
              <p className="get-started" style={{ color: "#fbd784" }}>
                HIKING ESSENTIALS
              </p>
            </div>
            <h2>Picking the right Hiking Gear!</h2>
            <p>
              The nice thing about beginning hiking is that you don’t really
              need any special gear, you can probably get away with things you
              already have. Let’s start with clothing. A typical mistake hiking
              beginners make is wearing jeans and regular clothes, which will
              get heavy and chafe wif they get sweaty or wet.
            </p>
            <button className="read-more-2">
              read more <img src={arrow_right} alt="" />
            </button>
          </div>
        </div>
        <div id="03" className="content-section-3">
          <div className="content-text-3">
            <div className="large-text-3">03</div>
            <div className="overlay-text-3">
              <div className="rectangular-line-3"></div>
              <p className="get-started" style={{ color: "#fbd784" }}>
                WHERE YOU GO IS THE KEY
              </p>
            </div>
            <h2>Understand Your Map & Timing</h2>
            <p>
              To start, print out the hiking guide and map. If it’s raining,
              throw them in a Zip-Lock bag. Read over the guide, study the map,
              and have a good idea of what to expect. I like to know what my
              next landmark is as I hike. For example, I’ll read the guide and
              know that say, in a mile, I make a right turn at the junction..
            </p>
            <button className="read-more-3">
              read more <img src={arrow_right} alt="" />
            </button>
          </div>
          <div className="image-container-3">
            <img src={one} alt="03" />
          </div>
        </div>
        <footer>
          <div id="footer-left">
            <div id="footer-logo">MNTN</div>
            <p id="footer-p1">
              Get out there & discover your next
              <br /> slope, mountain & destination!
            </p>
            <p id="footer-p2">Copyright 2023 MNTN, Inc. Terms & Privacy</p>
          </div>
          <div id="footer-right">
            <div id="footer-links-1">
              <h4>More on The Blog</h4>
              <ul>
                <li>
                  <a href="#">About MNTN</a>
                </li>
                <li>
                  <a href="#">Contributors & Writers</a>
                </li>
                <li>
                  <a href="#">Write For Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div id="footer-links-2">
              <h4>More on MNTN</h4>
              <ul>
                <li>
                  <a href="#">The Team</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
