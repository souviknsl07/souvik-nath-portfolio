import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Navbar.css";

function Header() {
  return (
    <div className="header">
      <div className="nav__header">
        <div className="information">
          <h3>Hello, I'm</h3>
          <h2>Souvik Nath</h2>
          <p>Web Developer</p>
          <div className="social__links">
            <a
              href="https://www.linkedin.com/in/souvik-nath-6b35691b0/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social__icon" style={{ color: "#2867B2" }}>
                <LinkedInIcon />
              </span>
            </a>
            <a
              href="https://www.facebook.com/souvik.nath.12914"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social__icon" style={{ color: "#4267B2" }}>
                <FacebookIcon />
              </span>
            </a>
            <a
              href="https://twitter.com/iamsouviknath"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social__icon" style={{ color: "#1DA1F2" }}>
                <TwitterIcon />
              </span>
            </a>
            <a
              href="https://www.instagram.com/i.amsouvik/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social__icon" style={{ color: "#E1306C" }}>
                <InstagramIcon />
              </span>
            </a>
          </div>
          <div className="header__buttons">
            <a href="resume.pdf" download>
              <button className="button">SEE MY RESUME </button>
            </a>
          </div>
        </div>
        <img className="profile__image" src="me.jpg" alt="" />
      </div>
    </div>
  );
}

export default Header;
