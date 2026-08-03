import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiVisualstudiocode,
  SiGithub,
  SiJira,
  SiConfluence,
  SiPostman,
  SiMicrosoftexcel,
  SiNotion,
  
} from "react-icons/si";

import { FaServer } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { FaProjectDiagram } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* Development */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>

      {/* Process */}
     <Col xs={4} md={2} className="tech-icons">
  <FaProjectDiagram title="Bizagi Modeler (BPMN)" />
</Col>

     

      {/* Collaboration */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJira title="Jira" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiScrum title="Agile Scrum" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiConfluence title="Confluence" />
      </Col>

      {/* Business */}
    

      <Col xs={4} md={2} className="tech-icons">
        <SiNotion title="Notion" />
      </Col>

      {/* ITSM */}
      <Col xs={4} md={2} className="tech-icons">
        <FaServer title="GLPI ITSM" />
      </Col>

    </Row>
  );
}

export default Toolstack;