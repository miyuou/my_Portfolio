import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m a curious problem-solver who thrives on exploring the "why" behind things. Whether through code, conversations, or writing, I seek to understand the world from different perspectives.
          </p>

          <p style={{ textAlign: "justify" }}>
            Outside of coding:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Public Speaking</span> – Speaking since childhood, I love sharing ideas and connecting with others.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Writing</span> – I jot down ideas and insights to reflect and explore deeper meanings.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Reading</span> – I dive into philosophy, psychology, and literature to broaden my worldview.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Active Listening</span> – I learn from others’ experiences to grow personally and professionally.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "Strive to build solutions that make a meaningful impact."
          </p>
          <footer className="blockquote-footer">Mirghany Meryem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;