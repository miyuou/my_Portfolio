import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Hero Section - About Me */}
        <Row className="justify-content-center">
          <Col
            lg={8}
            md={10}
            className="text-center"
            style={{
              paddingTop: "60px",
              paddingBottom: "60px",
            }}
          >
            <div className="mb-5">
              <h1 
                className="mb-4"
                style={{ 
                  fontSize: "2.5em", 
                  fontWeight: "700",
                  lineHeight: "1.2"
                }}
              >
                About <strong className="purple">Me</strong>
              </h1>
              <div className="d-flex justify-content-center">
                <div style={{ maxWidth: "600px", textAlign: "center" }}>
                  <Aboutcard />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <div 
              style={{ 
                paddingTop: "40px", 
                paddingBottom: "40px",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <h1 
                className="project-heading mb-5"
                style={{ 
                  fontSize: "2.2em",
                  fontWeight: "600",
                  marginBottom: "3rem"
                }}
              >
                Professional <strong className="purple">Skillset</strong>
              </h1>
              <div className="d-flex justify-content-center">
                <div style={{ maxWidth: "900px", width: "100%", textAlign: "center" }}>
                  <Techstack />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Tools Section */}
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <div 
              style={{ 
                paddingTop: "40px", 
                paddingBottom: "80px",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <h1 
                className="project-heading mb-5"
                style={{ 
                  fontSize: "2.2em",
                  fontWeight: "600",
                  marginBottom: "3rem"
                }}
              >
                <strong className="purple">Tools</strong> I Use
              </h1>
              <div className="d-flex justify-content-center">
                <div style={{ maxWidth: "900px", width: "100%", textAlign: "center" }}>
                  <Toolstack />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Optional: Add a subtle bottom section for visual completion */}
        <Row>
          <Col xs={12}>
            <div 
              style={{ 
                height: "60px",
                background: "linear-gradient(180deg, transparent 0%, rgba(108, 117, 125, 0.05) 100%)"
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;