import React from "react";
import { FaServer } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiDocker,
  SiLinux,
  SiJira,
  SiConfluence,
  SiPostman,
  SiGithub,
  SiMicrosoftexcel,
  SiNotion,
  SiPowerbi,
  
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { DiScrum } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* Dev Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Linux"/>
      </Col>

      {/* BI & Data */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi title="Power BI"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel title="Excel"/>
      </Col>

      {/* ITSM */}
      <Col xs={4} md={2} className="tech-icons">
  <FaServer title="GLPI - ITSM Platform"/>
</Col>

      {/* Project & Delivery */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJira title="Jira"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiConfluence title="Confluence"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum title="Agile Scrum"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram title="UML / Functional Design"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion title="Notion"/>
      </Col>

    </Row>
  );
}

export default Toolstack;