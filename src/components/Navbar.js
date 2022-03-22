import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="sub-container">
        <p className="logo">
          News<span className="sub-text">Room</span>
        </p>
        <nav>
          <ul className="nav-list">
            <li className="list-items">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="list-items">
              <a href="/indianNews" className="nav-link">
                Indian News
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
