import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/pi.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="flex-column-reverse flex-md-row align-items-center justify-content-center">
            {/* Image Column - Top on mobile */}
            <Col md={5} xs={12} className="text-center mb-4 mb-md-0">
              <img
                src={homeLogo}
                alt="profile"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  width: "auto",
                  maxWidth: "100%",
                  borderRadius: "10px",
                  ...(window.innerWidth <= 767 && { 
                    maxHeight: "300px"
                  })
                }}
              />
            </Col>

            {/* Text Column - Bottom on mobile */}
            <Col md={7} xs={12} className="text-center">
              <div className="d-flex flex-column align-items-center">
                <h1 style={{ paddingBottom: 15, paddingTop: "20px" }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> MIRGHANY MERYEM </strong>
                </h1>

                <div style={{ padding: "30px 0", display: "flex", justifyContent: "center", width: "100%" }}>
                  <div className="text-center">
                    <Type />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;