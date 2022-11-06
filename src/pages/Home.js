import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Learn.png";
import "../styles/Home.css";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <Helmet>
        <title> Welcome </title>
        <meta name="description" contents="online learning, e-learing, students, school" />
      </Helmet>
      <div className="headerContainer">
        <h1> LEARNER </h1>
        <p>LEARNING MADE EASY</p>
        <Link to="/Getstarted">
          <button> GET STARTED </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;