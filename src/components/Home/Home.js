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
          <Row className="align-items-center justify-content-center">
            {/* Image Column */}
            <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
              <img
                src={homeLogo}
                alt="profile"
                className="img-fluid"
                style={{
                  maxHeight: "300px",
                  width: "auto",
                  maxWidth: "100%",
                  borderRadius: "10px"
                }}
              />
            </Col>

            {/* Text Column */}
            <Col xs={12} md={6} className="text-center">
              <div className="d-flex flex-column align-items-center">
                <h1 style={{ paddingBottom: 15, paddingTop: "20px" }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name" style={{ whiteSpace: "nowrap", overflow: "visible" }}>
                  I'M<strong className="main-name" style={{ display: "block", marginTop: "10px" }}> MIRGHANY MERYEM </strong>
                </h1>

                <div style={{ padding: "30px 0" }}>
                  <Type />
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