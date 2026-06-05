import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center", lineHeight: "1.6" }}>
            I'm an engineer who believes the best SI solution starts with 
            understanding the business — not the tool. From mapping broken 
            workflows to deploying governed, automated systems, I work at the 
            intersection of <span className="purple">functional analysis</span>, 
            <span className="purple"> SI implementation</span> and 
            <span className="purple"> data intelligence</span>. Whether it's an 
            ITSM platform, an SIRH solution or a BI pipeline — I bridge the gap 
            between what the business needs and what the system delivers.
          </p>

          <p style={{ textAlign: "center", marginTop: "20px", fontWeight: "500" }}>
            Outside of work:
          </p>

          <ul style={{ listStyle: "none", paddingLeft: "0", marginLeft: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <li className="about-activity" style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px", gap: "12px", maxWidth: "500px", justifyContent: "center" }}>
              <ImPointRight style={{ marginTop: "4px", flexShrink: 0 }} />
              <span>
                <span className="purple">Public Speaking</span> – I love turning complex ideas into clear, compelling narratives for any audience.
              </span>
            </li>
            <li className="about-activity" style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px", gap: "12px", maxWidth: "500px", justifyContent: "center" }}>
              <ImPointRight style={{ marginTop: "4px", flexShrink: 0 }} />
              <span>
                <span className="purple">Writing</span> – I write to think. Ideas, observations, things worth remembering.
              </span>
            </li>
            <li className="about-activity" style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px", gap: "12px", maxWidth: "500px", justifyContent: "center" }}>
              <ImPointRight style={{ marginTop: "4px", flexShrink: 0 }} />
              <span>
                <span className="purple">Reading</span> – Philosophy, psychology, literature — I read to understand people before systems.
              </span>
            </li>
            <li className="about-activity" style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px", gap: "12px", maxWidth: "500px", justifyContent: "center" }}>
              <ImPointRight style={{ marginTop: "4px", flexShrink: 0 }} />
              <span>
                <span className="purple">Active Listening</span> – The skill that makes every analysis, every workshop, every delivery better.
              </span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "30px", fontStyle: "italic", textAlign: "center" }}>
            "The most powerful system is the one people actually trust."
          </p>
          <footer className="blockquote-footer" style={{ textAlign: "center", color: "rgb(155 126 172)" }}>Meryem Mirghany</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;