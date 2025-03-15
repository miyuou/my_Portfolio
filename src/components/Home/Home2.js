import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/piccie.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hey! I’m <span className="purple">Mirghany Meryem</span>, a 4th-year engineering student at{" "}
              <span className="purple">EMSI, Casablanca</span>. I’m currently diving into{" "}
              <span className="purple">software development</span>, with a focus on{" "}
              <span className="purple">front-end, back-end</span>, and{" "}
              <span className="purple">mobile apps</span>, as well as exploring{" "}
              <span className="purple">data</span> and{" "}
              <span className="purple">artificial intelligence</span>.
              <br />
              <br />
              Still learning and growing every day, and I’m excited to tackle new challenges. I believe the best
              solutions come from really listening to others and soaking in different ideas and perspectives. I'm the
              one you’ll find listening closely and learning from those around me. 
              <br />
              <br />
              Outside of coding, I enjoy <span className="purple">reading</span>, <span className="purple">writing</span>, and exploring topics like psychology and philosophy. 🧠📚
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="piccie" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/miyuou"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
           
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/meryem-mirghany-779437298/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
           
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
