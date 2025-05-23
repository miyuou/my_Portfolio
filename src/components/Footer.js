
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
 
} from "react-icons/ai";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const phoneNumber = "0632592233"; 
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MM.</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/miyuou"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
           
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/meryem-mirghany-779437298"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={`tel:${phoneNumber}`} // Use the tel: protocol for phone numbers
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <FaPhone />
              </a>
            </li>
           
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
