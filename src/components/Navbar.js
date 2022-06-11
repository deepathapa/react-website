import React, { useState } from "react";
import "./style.css";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const handleClick = () => setShowMediaIcons(!showMediaIcons);
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="topbar_wrapper">
          <div className="logo_desktop">
            <img src="images/logo.png" className="logo" alt="" />
          </div>
          <div className="logo_mobile">
            <img src="images/logo2.png" className="logo" alt="" />
          </div>
        </div>
        <div className="menu_wrap">
          <div className="menu_text">
            <h5>MENU</h5>
          </div>
          <div className="hamburger-menu" onClick={handleClick}>
            <i
              className={
                showMediaIcons ? "fa-solid fa-times" : "fa-solid fa-bars"
              }
            />
          </div>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul className="navbar_header">
            <li className="nav-item">
              <Link to="/">
                Home
                <i
                  className="fa-solid fa-angle-down"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                ></i>
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">Team</Link>
            </li>
            <li>
              <Link to="/about">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">Clients</Link>
            </li>
            <li>
              <Link to="/about">
                Blog <i className="fa-solid fa-angle-down"></i>
              </Link>
            </li>
            <li>
              <Link to="/about">Contact</Link>
            </li>
          </ul>
          <div className="hire_btn">
            <a href="#">Hire Me</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
