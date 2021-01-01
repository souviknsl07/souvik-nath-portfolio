import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const history = useHistory();
  return (
    <div className="header">
      <div className="navbar">
        <div className="nav__profile">
          <img
            onClick={(e) => history.push("/")}
            className="displayPicture"
            src="me.jpg"
            alt=""
          />
          <div className="user">
            <span>Souvik</span>
            <span>Nath</span>
          </div>
        </div>

        <div className="nav">
          <Link className="link" to="/">
            <span className="nav__options">HOME</span>
          </Link>
          <Link className="link" to="/about">
            <span className="nav__options">ABOUT</span>
          </Link>
          <Link className="link" to="/contact">
            <span className="nav__options">CONTACT</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
