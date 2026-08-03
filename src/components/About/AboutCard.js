import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center", lineHeight: "1.7" }}>
            I’m passionate about{" "}
            <span className="purple">digital transformation</span> and{" "}
            <span className="purple">business process optimization</span>.
            I enjoy bridging business needs with technology through{" "}
            <span className="purple">business analysis</span>,{" "}
            <span className="purple">workflow automation</span>, and{" "}
            <span className="purple">data-driven decision support</span>.
            <br />
            <br />
            My experience spans HR transformation, IT operations, business
            intelligence, and AI-enabled process improvement. From analyzing
            and redesigning business processes to implementing governed,
            automated solutions, I combine business analysis, technical
            implementation, and change management to deliver measurable
            business value.
          </p>

          <p
            style={{
              textAlign: "center",
              marginTop: "22px",
              fontWeight: "600",
            }}
          >
            Beyond technology
          </p>

          <ul
            style={{
              listStyle: "none",
              paddingLeft: "0",
              marginLeft: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <li
              className="about-activity"
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "12px",
                gap: "12px",
                maxWidth: "520px",
              }}
            >
              <ImPointRight style={{ marginTop: "4px", flexShrink: 0 }} />
              <span>
                <span className="purple">Writing & Strategic Thinking</span>{" "}
                : I enjoy transforming complex ideas into structured insights,
                business cases, and practical recommendations.
              </span>
            </li>

            <li
              className="about-activity"
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "12px",
                gap: "12px",
                maxWidth: "520px",
              }}
            >
              <ImPointRight style={{ marginTop: "4px", flexShrink: 0 }} />
              <span>
                <span className="purple">Reading</span> : Exploring
                organizational behavior, psychology, and philosophy to better
                understand how people, organizations, and technology evolve
                together.
              </span>
            </li>

            <li
              className="about-activity"
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "12px",
                gap: "12px",
                maxWidth: "520px",
              }}
            >
              <ImPointRight style={{ marginTop: "4px", flexShrink: 0 }} />
              <span>
                <span className="purple">Communication</span> : Turning
                technical and business concepts into clear, actionable messages
                for diverse stakeholders.
              </span>
            </li>

            <li
              className="about-activity"
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "12px",
                gap: "12px",
                maxWidth: "520px",
              }}
            >
              <ImPointRight style={{ marginTop: "4px", flexShrink: 0 }} />
              <span>
                <span className="purple">Active Listening</span> : Essential
                for understanding stakeholder needs, uncovering process
                challenges, and building solutions people actually adopt.
              </span>
            </li>
          </ul>

          <p
            style={{
              color: "rgb(155 126 172)",
              marginTop: "28px",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            "The best technology is the one that solves a real business
            problem, and that people actually embrace."
          </p>

          <footer
            className="blockquote-footer"
            style={{
              textAlign: "center",
              color: "rgb(155 126 172)",
            }}
          >
            Meryem Mirghany
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;