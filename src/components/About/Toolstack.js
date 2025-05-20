import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVisualstudio,
  SiPostman,
  SiDocker,
  SiLinux,
} from "react-icons/si";
import { FaLinux, FaProjectDiagram } from "react-icons/fa"; // UML
import { DiScrum } from "react-icons/di"; // Agile/Scrum
import { SiAndroidstudio, SiFlutter } from "react-icons/si"; // Android Studio, Flutter
import { DiIntellij, DiEclipse } from "react-icons/di"; // IntelliJ IDEA, Eclipse

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* IDEs & Dev Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIntellij />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse />
      </Col>

      {/* Mobile Development Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      

      {/* DevOps & Deployment */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>

      {/* Operating Systems */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
    

      {/* Project Management */}
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum /> {/* Scrum & Agile */}
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram /> {/* UML */}
      </Col>
    </Row>
  );
}

export default Toolstack;
