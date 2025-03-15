import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Signature Section */}
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            fontSize: "2rem", // Larger size for emphasis
            fontWeight: "bold",
            fontFamily: "'Great Vibes', cursive", // Elegant cursive font
            color: "#7B1FA2", // Rich purple shade
            marginRight: "20px", // Spacing between signature and Home link
            textDecoration: "none", // Remove default underline
            transition: "color 0.3s ease, transform 0.3s ease", // Smooth hover effect
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#9C27B0"; // Lighter purple on hover
            e.target.style.transform = "scale(1.05)"; // Slightly enlarge on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#7B1FA2"; // Reset color on hover out
            e.target.style.transform = "scale(1)"; // Reset size on hover out
          }}
        >
          MM. {/* Your signature */}
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Certificates"
                onClick={() => updateExpanded(false)}
              >
                <FaAward style={{ marginBottom: "2px" }} /> Certificates
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;