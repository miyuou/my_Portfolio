import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center", lineHeight: "1.6" }}>
            I'm a curious problem-solver who thrives on exploring the "why" behind things. Whether through code, conversations, or writing, I seek to understand the world from different perspectives.
          </p>

          <p style={{ textAlign: "center", marginTop: "20px", fontWeight: "500" }}>
            Outside of coding:
          </p>

          <ul style={{ listStyle: "none", paddingLeft: "0", marginLeft: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <li className="about-activity" style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px", gap: "12px", maxWidth: "500px", justifyContent: "center" }}>
              <ImPointRight style={{ marginTop: "4px", flexShrink: 0 }} />
              <span>
                <span className="purple">Public Speaking</span> – Speaking since childhood, I love sharing ideas and connecting with others.
              </span>
            </li>
            <li className="about-activity" style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px", gap: "12px", maxWidth: "500px", justifyContent: "center" }}>
              <ImPointRight style={{ marginTop: "4px", flexShrink: 0 }} />
              <span>
                <span className="purple">Writing</span> – I jot down ideas and insights to reflect and explore deeper meanings.
              </span>
            </li>
            <li className="about-activity" style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px", gap: "12px", maxWidth: "500px", justifyContent: "center" }}>
              <ImPointRight style={{ marginTop: "4px", flexShrink: 0 }} />
              <span>
                <span className="purple">Reading</span> – I dive into philosophy, psychology, and literature to broaden my worldview.
              </span>
            </li>
            <li className="about-activity" style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px", gap: "12px", maxWidth: "500px", justifyContent: "center" }}>
              <ImPointRight style={{ marginTop: "4px", flexShrink: 0 }} />
              <span>
                <span className="purple">Active Listening</span> – I learn from others' experiences to grow personally and professionally.
              </span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "30px", fontStyle: "italic", textAlign: "center" }}>
            "Strive to build solutions that make a meaningful impact."
          </p>
          <footer className="blockquote-footer" style={{ textAlign: "center", color: "rgb(155 126 172)" }}>Mirghany Meryem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;