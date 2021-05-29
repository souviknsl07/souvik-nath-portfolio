import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const history = useHistory();

  // const links = document.querySelectorAll(".nav span");

  const navLinks = useRef(".nav");
  const links = useRef(".link");
  const hamburger = useRef(".hamburger");

  const open = () => {
    navLinks.current.classList.toggle("open");
    //links.current.classList.toggle("fade");
    hamburger.current.classList.toggle("toggle");
  };

  return (
    <div className="header">
      <div className="navbar">
        <div className="nav__profile">
          <img
            onClick={(e) => history.push("/")}
            className="displayPicture"
            src="me.jpg"
            alt="Souvik Nath"
          />
          <div className="user">
            <span>Souvik</span>
            <span>Nath</span>
          </div>
        </div>

        <div className="hamburger" ref={hamburger} onClick={open}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />
        <div className="nav" ref={navLinks}>
          <Link className="link" ref={links} onClick={open} to="/">
            <span className="nav__options">HOME</span>
          </Link>
          <Link className="link" ref={links} onClick={open} to="/about">
            <span className="nav__options">ABOUT ME</span>
          </Link>
          <Link className="link" ref={links} onClick={open} to="/contact">
            <span className="nav__options">CONTACT ME</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
