import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiDjango,
} from "react-icons/di";
import {
  SiMysql,
  SiMicrosoftsqlserver,
  SiOracle,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiSnowflake,
  SiMongodb,
  SiApacheairflow,
  SiJira,
  SiPowerbi,
  SiAzuredevops,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* Core Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript"/>
      </Col>

      {/* SI & Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango title="Django"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="NodeJS"/>
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="MySQL"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver title="SQL Server"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle title="Oracle"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb title="MongoDB"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSnowflake title="Snowflake"/>
      </Col>

      {/* Data & BI */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi title="Power BI"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow title="Airflow / ETL"/>
      </Col>

      {/* DevOps & Cloud */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops title="Azure DevOps"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git"/>
      </Col>

      {/* Project & ITSM */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJira title="Jira"/>
      </Col>

      {/* Web */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML5"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 title="CSS3"/>
      </Col>

    </Row>
  );
}

export default Techstack;