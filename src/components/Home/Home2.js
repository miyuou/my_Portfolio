import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Piccie.png";
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
  WELCOME TO MY WORLD: <span className="purple">Where Innovation Meets Engineering</span>
</h1>
<p className="home-about-body">
  Hi! I’m <span className="purple">Mirghany Meryem</span>, a 4th-year engineering student at{" "}
  <span className="purple">EMSI, Casablanca</span>. I’m passionate about{" "}
  <span className="purple">software development</span>, specializing in{" "}
  <span className="purple">front-end and back-end development</span>,{" "}
  <span className="purple">mobile applications</span>, and exploring the fields of{" "}
  <span className="purple">data science</span> and{" "}
  <span className="purple">artificial intelligence</span>.
  <br />
  <br />
  I’m constantly learning and growing, and I thrive on tackling new challenges. I believe the best solutions come from{" "}
  <span className="purple">collaboration</span> and{" "}
  <span className="purple">diverse perspectives</span>. I’m the kind of person who listens intently, learns from others, and applies those insights to create meaningful results.
  <br />
  <br />
  When I’m not coding, I enjoy <span className="purple">reading</span>,{" "}
  <span className="purple">writing</span>, and exploring topics like{" "}
  <span className="purple">psychology</span> and{" "}
  <span className="purple">philosophy</span>. 🧠📚
</p>
</Col>
          <Col md={4} className="myAvtar">
  <Tilt>
    <img src={myImg} width="150" height="150" alt="piccie" />
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
