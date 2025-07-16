import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiDjango,

} from "react-icons/di";
import {
  SiFirebase,
  SiMysql,
  SiMicrosoftsqlserver,
  SiOracle,
  SiSpringboot,
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiSupabase,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp title="C#"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus title="C++"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python"/>
      </Col>
     

      {/* Frameworks & Libraries */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet title=".NET"/> {/* .NET icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot title="Springboot"/> {/* Represents J2EE */}
      </Col>
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
        <SiMysql title="Mysql"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver title="SqlServer" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle title="Oracle"/>
      </Col>
    

      {/* Cloud & Big Data */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase title="Firebase"/>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiSupabase title="Supabase"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker"/>
      </Col>
    

      {/* Web Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML5"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 title="CSS"/>
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="GIT"/>
      </Col>
    </Row>
  );
}

export default Techstack;
