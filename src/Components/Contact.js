import React from "react";
import CallIcon from "@material-ui/icons/Call";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Contact.css";

function Contact() {
  return (
    <div className="cover">
      <div className="contact">
        <div className="contact__box">
          <h2>Contact</h2>
          <div className="contact__info">
            <CallIcon fontSize="large" style={{}} />
            <h2>+919365232592</h2>
          </div>
          <div className="contact__info">
            <WhatsAppIcon fontSize="large" style={{ color: "#4AC959" }} />
            <h2>+919365232592</h2>
          </div>
          <div className="contact__info">
            <EmailIcon fontSize="large" style={{ color: "#F4B400" }} />
            <h2>souviknsl07@gmail.com</h2>
          </div>
          <div className="contact__info">
            <LinkedInIcon fontSize="large" style={{ color: "#2867B2" }} />
            <h2>@souvik-nath-6b35691b0</h2>
          </div>
          <div className="contact__info">
            <FacebookIcon fontSize="large" style={{ color: "#4267B2" }} />
            <h2>@souvik.nath.12914</h2>
          </div>
          <div className="contact__info">
            <TwitterIcon fontSize="large" style={{ color: "#1DA1F2" }} />
            <h2>@iamsouviknath</h2>
          </div>
          <div className="contact__info instagram__icon">
            <InstagramIcon fontSize="large" style={{ color: "#E1306C" }} />
            <h2>@iamsouviknath</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
