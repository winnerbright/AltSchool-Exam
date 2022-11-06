import React from "react";
import PizzaLeft from "../assets/Learning.png";
import "../styles/Contact.css";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <div className="contact">
      <Helmet>
        <title> Contact Us </title>
        <meta name="description" contents="reach us for more info" />
      </Helmet>
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;