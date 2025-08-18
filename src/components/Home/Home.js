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
          <Row className="flex-column-reverse flex-md-row align-items-center">
            {/* Image Column - Top on mobile */}
            <Col md={5} className="text-center mb-4 mb-md-0">
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
                    maxHeight: "400px"
                  })
                }}
              />
            </Col>

         {/* Text Column - Bottom on mobile */}
<Col md={7} className="text-md-start">
  <div className="d-flex flex-column align-items-center align-items-md-start">
    <h1 style={{ paddingBottom: 15, paddingTop: "20px" }} className="heading text-center text-md-start">
      Hi There!{" "}
      <span className="wave" role="img" aria-labelledby="wave">
        👋🏻
      </span>
    </h1>

    <h1 className="heading-name text-center text-md-start">
      I'M
      <strong className="main-name"> MIRGHANY MERYEM </strong>
    </h1>

    <div style={{ padding: "30px 0" }} className="text-center text-md-start">
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