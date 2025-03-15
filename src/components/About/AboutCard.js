import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mirghany Meryem</span> from <span className="purple">Casablanca, Morocco.</span>
            <br />
            I am currently in my 4th year of engineering at EMSI (specializing in MIAGE), focusing on frontend and backend development, mobile and web applications, and exploring data intelligence and artificial intelligence.
          </p>
          
          <p style={{ textAlign: "justify" }}>
            Outside of coding, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Public Speaking
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Active Listening
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Mirghany Meryem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
