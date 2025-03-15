import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Collection from "../../Assets/Projects/coll.png";
import Hiber from "../../Assets/Projects/hotel hiber casablanca.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Hiber Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hiber}
              title="Hiber"
              shortDescription="Hotel Reservation Management System."
              description="HIBER is a web-based hotel reservation system developed with Django and MySQL. It enables clients to book rooms online and provides administrators with a dashboard to manage room availability and reservations, enhancing efficiency and user experience."
              ghLink="https://github.com/miyuou/Hiber"
              isOngoing={false} // Set to true if the project is ongoing
            />
          </Col>
          
          {/* Collection Manager Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Collection}
              title="Collection Manager"
              shortDescription="An efficient tool to manage collections."
              description="Collection Manager allows you to efficiently manage and track various collections. With its user-friendly interface, users can add, edit, and remove items from their collection with ease."
              ghLink="https://github.com/miyuou/CollectionManager"
              isOngoing={true} // Set to false if the project is completed
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
