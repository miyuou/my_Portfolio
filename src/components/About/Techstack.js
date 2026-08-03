import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiReact,
  DiDjango,
  DiGit,
} from "react-icons/di";

import {
  SiPostgresql,
  SiMysql,
  SiMicrosoftsqlserver,
  SiDocker,
  SiPowerbi,
  SiApacheairflow,
  SiMicrosoftazure,
  SiGooglecloud,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* Programming */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiDjango title="Django" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="MySQL" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver title="SQL Server" />
      </Col>

      {/* Data */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi title="Power BI" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow title="Apache Airflow" />
      </Col>

      {/* Cloud */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure title="Microsoft Azure" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud title="Google Cloud Platform" />
      </Col>

      {/* Dev */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>

    </Row>
  );
}

export default Techstack;