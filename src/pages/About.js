import React from "react";
import Learners from "../assets/Learners.png";
import "../styles/About.css";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div className="about">
      <Helmet>
        <title> Explore About </title>
        <meta name="description" contents="find out more" />
      </Helmet>
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Learners})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Learner is an online learning community with thousands of lessons on subjects including 
        illustration, design, photography, video, freelancing, and lots more for those who are creative
         and curious. On Learner, users congregate to get inspiration and advance their creative processes
         At Learner, we've witnessed time and time again how the ostensibly straightforward act of creating 
         can be a catalyst for personal development, evolution, and discovery. We wish to encourage and 
         spread the kind of imaginative discovery that advances communication, education, and application.
        </p>
        <h1> VISION </h1>
        <p>
        To provide professional, strategic and easy access to e-learning services at competitive fee levels, 
        to a worldwide circle of students, creatives and all our clients in a way that adds long-term value 
        to their career and personal development.
        </p>
        <h1> MISSION </h1>
        <p>
        To provide professional, strategic and easy access to e-learning services at competitive fee levels, 
        to a worldwide circle of students, creatives and all our clients in a way that adds long-term value 
        to their career and personal development.
        </p>
      </div>
    </div>
  );
}

export default About;