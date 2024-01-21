import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-links">
          <div className="navbar-links-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navbar-links-container">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#wgpt3">What is GPT-3?</a>
            </p>
            <p>
              <a href="#possibility">Open AI</a>
            </p>
            <p>
              <a href="#features">Case Studies</a>
            </p>
            <p>
              <a href="#blog">Library</a>
            </p>
          </div>
        </div>
        <div className="navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="navbar-menu">
          {isMenuOpen ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setMenuOpen(true)}
            />
          )}
          {isMenuOpen && (
            <div className="navbar-menu-container scale-up-center">
              <div className="navbar-menu-container-links">
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#wgpt3">What is GPT-3?</a>
                </p>
                <p>
                  <a href="#possibility">Open AI</a>
                </p>
                <p>
                  <a href="#features">Case Studies</a>
                </p>
                <p>
                  <a href="#blog">Library</a>
                </p>
              </div>
              <div className="navbar-menu-container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
