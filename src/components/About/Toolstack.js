import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVisualstudio,
  SiDocker,
  SiLinux,
} from "react-icons/si";
import { FaLinux, FaProjectDiagram } from "react-icons/fa"; // UML
import { DiScrum } from "react-icons/di"; // Agile/Scrum
import { SiAndroidstudio, SiFlutter } from "react-icons/si"; // Android Studio, Flutter
import { DiIntellij, DiEclipse } from "react-icons/di"; // IntelliJ IDEA, Eclipse
import { FaChartBar } from "react-icons/fa";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* IDEs & Dev Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VSCode"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio title="Visual Studio"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIntellij title="Intellij"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse title="Eclipse"/>
      </Col>

      {/* Mobile Development Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio title="AndroidStudio"/>
      </Col>
      

      {/* DevOps & Deployment */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker"/>
      </Col>

      {/* Operating Systems */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Linux"/>
      </Col>
    

      {/* Project Management */}
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum title="Scrum & Agile"/> {/* Scrum & Agile */}
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram title="UML"/> {/* UML */}
      </Col>
      {/* BI & Reporting Tools */}
<Col xs={4} md={2} className="tech-icons">
  <FaChartBar title="Power BI" />
</Col>

    </Row>
  );
}

export default Toolstack;
