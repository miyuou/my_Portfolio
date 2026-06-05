import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";
const eduCardStyle = {
  background: "rgba(255, 255, 255, 0)",
  padding: "20px",
  borderRadius: "10px",
  marginBottom: "20px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  height: "260px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden"
};
const expCardStyle = {
  background: "rgba(255, 255, 255, 0)",
  padding: "20px",
  borderRadius: "10px",
  marginBottom: "20px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  height: "400px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden"
};


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>

        <Row className="justify-content-center">
          <Col md={8} className="home-about-description text-center">
            <h1 style={{ fontSize: "2.6em" }}>
              WELCOME TO MY WORLD: <span className="purple">Where Data Meets Business Impact</span>
            </h1>
           <p className="home-about-body" style={{ textAlign: "center" }}>
  I'm <span className="purple">Meryem Mirghany</span>, a final-year MIAGE
  engineering student at <span className="purple">EMSI, Casablanca</span>.
  Currently interning at <span className="purple">Deloitte Extended Services</span>,
  I work at the intersection of <span className="purple">business process analysis</span> and
  <span className="purple"> SI implementation</span> — turning broken manual workflows
  into automated, governed, and decision-ready systems.
  <br /><br />
  My work spans the full delivery cycle: from
  <span className="purple"> functional specs and process mapping </span>
  to <span className="purple">SI configuration, data governance</span> and
  <span className="purple"> BI dashboards</span> that stakeholders actually use.
  Whether it's an ITSM platform, an SIRH solution, or a data pipeline —
  the approach is always the same: understand the business first, then build what solves it.
  <br /><br />
  Outside of work, I explore <span className="purple">psychology</span>,
  <span className="purple"> philosophy</span> and
  <span className="purple"> writing</span>.
</p>
          </Col>
        </Row>

        {/* Education Section */}
        <Row className="education-section" style={{ paddingTop: "50px", alignItems: "stretch" }}>
          <Col md={12}>
            <h1 className="project-heading">
              My <strong className="purple">Education</strong>
            </h1>
          </Col>

          <Col md={6} className="education-card">
            <div className="education-item" style={eduCardStyle}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <MdSchool style={{ fontSize: "1.5em", color: "#c770f0", marginRight: "10px" }} />
                <h3 className="purple" style={{ margin: "0", fontSize: "1.2em" }}>Engineering Degree</h3>
              </div>
              <h4 style={{ color: "#b0b0b084", margin: "0 0 10px 0", fontSize: "1.1em" }}>EMSI - École Marocaine des Sciences de l'Ingénieur</h4>
              <div style={{ marginBottom: "15px" }}>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Location:</span> Casablanca, Morocco
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Year:</span> 2021 - 2026 (Expected)
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Focus:</span> Software Engineering & Networks (MIAGE) 
                </p>
              </div>
            </div>
          </Col>

          <Col md={6} className="education-card">
            <div className="education-item" style={eduCardStyle}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <MdSchool style={{ fontSize: "1.5em", color: "#c770f0", marginRight: "10px" }} />
                <h3 className="purple" style={{ margin: "0", fontSize: "1.2em" }}>Baccalauréat</h3>
              </div>
              <h4 style={{ color: "#b0b0b084", margin: "0 0 10px 0", fontSize: "1.1em" }}>Lahlou School Group</h4>
              <div style={{ marginBottom: "15px" }}>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Location:</span> Casablanca, Morocco
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Year:</span> 2020 - 2021
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Honors:</span> With honors - Physical Science
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Experience Section */}
        <Row className="experience-section" style={{ paddingTop: "50px", alignItems: "stretch" }}>
          <Col md={12}>
            <h1 className="project-heading">
              My <strong className="purple">Experience</strong>
            </h1>
          </Col>

          <Col md={6} className="experience-card">
            <div className="experience-item" style={expCardStyle}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <MdWork style={{ fontSize: "1.5em", color: "#c770f0", marginRight: "10px" }} />
              <h3 className="purple" style={{ margin: "0", fontSize: "1.2em" }}>
                                       SI Implementation & Data Governance
                       </h3>


               <span className="purple">Stack:</span> Python/Django, Power BI, ETL, RBAC, Agile Scrum

</div>
               <p style={{ fontSize: "0.9em", color: "white", flexGrow: 1, margin: "0", overflow: "hidden" }}>
                     Digitalized an end-to-end HR payroll process covering 30+ organizational units. Delivered a secure SI solution (RBAC, audit trail, zero data persistence) with instant automated calculations replacing a 100% manual workflow and created dedicated Power BI spaces for DRH, CDGS and executive stakeholders.

              </p>
            </div>
           
          </Col>

          <Col md={6} className="experience-card">
            <div className="experience-item" style={expCardStyle}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <MdWork style={{ fontSize: "1.5em", color: "#c770f0", marginRight: "10px" }} />
                <h3 className="purple" style={{ margin: "0", fontSize: "1.2em" }}> ITSM Reporting & Data Engineer</h3>
              </div>
              <h4 style={{ color: "#b0b0b084", margin: "0 0 10px 0", fontSize: "1.1em" }}>Groupe Auto Hall</h4>
              <div style={{ marginBottom: "15px" }}>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Type:</span> Internship
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Duration:</span> Jul 2025 - Aug 2025
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Stack:</span> Python, ETL, Power BI, Jira, Agile Scrum
                </p>
              </div>
              <p style={{ fontSize: "0.9em", color: "white", flexGrow: 1, margin: "0", overflow: "hidden" }}>
                Built PowerGLPI : an automated BI solution connected directly to the GLPI ITSM
  platform, eliminating 100% of manual IT reporting and cutting processing time by 90%.
  Designed ETL pipelines and Power BI dashboards tracking real-time incident,
  ticket and asset performance across the full Agile Scrum delivery cycle.
              </p>
            </div>
          </Col>

          <Col md={6} className="experience-card">
            <div className="experience-item" style={expCardStyle}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <MdWork style={{ fontSize: "1.5em", color: "#c770f0", marginRight: "10px" }} />
                <h3 className="purple" style={{ margin: "0", fontSize: "1.2em" }}>Census Enumerator</h3>
              </div>
              <h4 style={{ color: "#b0b0b084", margin: "0 0 10px 0", fontSize: "1.1em" }}>Haut Commissariat au Plan</h4>
              <div style={{ marginBottom: "15px" }}>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Type:</span> Full-Time
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Duration:</span> Aug 2024 - Sep 2024
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Focus:</span> Data Collection & Quality Assurance
                </p>
              </div>
              <p style={{ fontSize: "0.9em", color: "white", flexGrow: 1, margin: "0", overflow: "hidden" }}>
                Collected and validated demographic datasets for Morocco's 2024 
National Census - more than 1000 residents. Applied data quality rules ensuring 
completeness, consistency and uniqueness across high-volume structured data.
              </p>
            </div>
          </Col>

          <Col md={6} className="experience-card">
            <div className="experience-item" style={expCardStyle}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <MdWork style={{ fontSize: "1.5em", color: "#c770f0", marginRight: "10px" }} />
                <h3 className="purple" style={{ margin: "0", fontSize: "1.2em" }}>IT Project Coordinator</h3>
              </div>
              <h4 style={{ color: "#b0b0b084", margin: "0 0 10px 0", fontSize: "1.1em" }}>Canal Informatique</h4>
              <div style={{ marginBottom: "15px" }}>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Type:</span> Internship
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Duration:</span> Jul 2024
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Focus:</span> IT Infrastructure & Project Management
                </p>
              </div>
              <p style={{ fontSize: "0.9em", color: "white", flexGrow: 1, margin: "0", overflow: "hidden" }}>
                Observed end-to-end network implementation for a 20+ workstation infrastructure project. Gained hands-on exposure to project planning, deployment coordination and stakeholder management.
              </p>
            </div>
          </Col>

          <Col md={6} className="experience-card">
            <div className="experience-item" style={expCardStyle}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <MdWork style={{ fontSize: "1.5em", color: "#c770f0", marginRight: "10px" }} />
                <h3 className="purple" style={{ margin: "0", fontSize: "1.2em" }}>Supply Chain & Operations Coordinator</h3>
              </div>
              <h4 style={{ color: "#b0b0b084", margin: "0 0 10px 0", fontSize: "1.1em" }}>Afriquia Shipping</h4>
              <div style={{ marginBottom: "15px" }}>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Type:</span> Internship
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Duration:</span> Jun 2023 - Jul 2023
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Focus:</span> Logistics & Supply Chain Systems
                </p>
              </div>
              <p style={{ fontSize: "0.9em", color: "white", flexGrow: 1, margin: "0", overflow: "hidden" }}>
                Analyzed data flows across international trade operations. Developed structured problem-solving skills in a high-stakes operational environment with cross-functional coordination.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/miyuou"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/meryem-mirghany-779437298/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Home2;