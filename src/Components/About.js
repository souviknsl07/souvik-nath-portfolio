import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__me">
        <div className="bio__data">
          <img src="me.jpg" alt="" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap"
            rel="stylesheet"
          />
          <div className="data">
            <h2>Souvik Nath</h2>
            <h4>Student</h4>
            <p>Hard Working, Passionate and Consistently Learning</p>
          </div>
        </div>
        <h2>EDUCATION</h2>
        <div className="education">
          <div className="college__info">
            <h4>Bachelor of Technology</h4>
            <h4>Computer Science and Engineering</h4>
            <h3>Jorhat Engineering College</h3>
            <p>2019 - Present</p>
          </div>
          <div className="highschool__info">
            <h4>High School</h4>
            <h3>Sai Vikash Vidya Niketan</h3>
            <p>2017 - 2019</p>
          </div>
          <div className="school__info">
            <h4>Schooling</h4>
            <h3>Kendriya Vidyalaya Panchgram</h3>
            <p>2007 - 2017</p>
          </div>
        </div>
        <h2>LANGUAGES</h2>
        <div className="button__objects">
          <button className="about__button">
            <h3>English</h3>
          </button>
          <button className="about__button">
            <h3>Hindi</h3>
          </button>
          <button className="about__button">
            <h3>Bengali</h3>
          </button>
        </div>
        <h2>INTERESTS</h2>
        <div className="button__objects">
          <button className="about__button">
            <h3>Programming</h3>
          </button>
          <button className="about__button">
            <h3>Reading</h3>
          </button>
          <button className="about__button">
            <h3>Badminton</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
