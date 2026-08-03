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
  height: "430px",
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
              TRANSFORMATION THROUGH <span className="purple">PROCESS & DATA</span>
            </h1>
            <p className="home-about-body" style={{ textAlign: "center" }}>
              I'm <span className="purple">Meryem Mirghany</span>, a digital transformation 
              specialist and <span className="purple">MIAGE engineer</span> at 
              <span className="purple"> EMSI, Casablanca</span>.
              Currently at <span className="purple">Deloitte Extended Services</span>,
              I specialize in <span className="purple">business process optimization</span>, 
              <span className="purple"> workflow automation</span>, and 
              <span className="purple"> data-driven decision support</span>.
              <br /><br />
              I work at the intersection of business and technology:
              <span className="purple"> mapping broken processes</span>, designing 
              <span className="purple"> governance frameworks</span>, building 
              <span className="purple"> automated solutions</span>, and delivering 
              <span className="purple"> analytics that drive decisions</span>.
            
              <br /><br />
              My approach: <span className="purple">process first, technology second</span>.
              I'm driven by measurable impact-turning manual, error-prone workflows into 
              governed, automated, and data-informed systems.
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
                <h3 className="purple" style={{ margin: "0", fontSize: "1.2em" }}>MIAGE Engineering Degree</h3>
              </div>
              <h4 style={{ color: "#b0b0b084", margin: "0 0 10px 0", fontSize: "1.1em" }}>EMSI — Moroccan School of Engineering Sciences</h4>
              <div style={{ marginBottom: "15px" }}>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Location:</span> Casablanca, Morocco
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Year:</span> 2021 - 2026 (Expected)
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Specialization:</span> Digital Transformation & Data Engineering
                </p>
              </div>
            </div>
          </Col>

          <Col md={6} className="education-card">
            <div className="education-item" style={eduCardStyle}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <MdSchool style={{ fontSize: "1.5em", color: "#c770f0", marginRight: "10px" }} />
                <h3 className="purple" style={{ margin: "0", fontSize: "1.2em" }}>High School Diploma</h3>
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
                  <span className="purple">Track:</span> Physical Sciences — High Honors
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
                <h3 className="purple" style={{ margin: "0", fontSize: "1.2em" }}>Digital Transformation Specialist</h3>
              </div>
              <h4 style={{ color: "#b0b0b084", margin: "0 0 10px 0", fontSize: "1.1em" }}>Deloitte Extended Services</h4>
              <div style={{ marginBottom: "15px" }}>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Role:</span> Digital Transformation Intern
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Duration:</span> Feb 2026 - Present
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Focus:</span> Process Analysis, Automation, Data Governance
                </p>
              </div>
              <p style={{ fontSize: "0.9em", color: "white", flexGrow: 1, margin: "0", overflow: "hidden" }}>
                Designed and deployed HR payroll transformation across 30+ organizational units. Conducted process analysis to map AS-IS workflows, identified automation opportunities, and architected secure solution with RBAC governance and audit trail. Delivered instant automated calculations (3h → 5 min) and structured data governance for sensitive compensation data.
              </p>
            </div>
          </Col>

          <Col md={6} className="experience-card">
            <div className="experience-item" style={expCardStyle}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <MdWork style={{ fontSize: "1.5em", color: "#c770f0", marginRight: "10px" }} />
                <h3 className="purple" style={{ margin: "0", fontSize: "1.2em" }}>Business Intelligence & Process Optimization</h3>
              </div>
              <h4 style={{ color: "#b0b0b084", margin: "0 0 10px 0", fontSize: "1.1em" }}>Groupe Auto Hall</h4>
              <div style={{ marginBottom: "15px" }}>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Role:</span> BI & Process Automation Intern
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Duration:</span> Jul 2025 - Aug 2025
                </p>
                <p style={{ color: "#b0b0b084", margin: "5px 0", fontSize: "0.9em" }}>
                  <span className="purple">Focus:</span> ITSM Automation, Analytics, Operational Excellence
                </p>
              </div>
              <p style={{ fontSize: "0.9em", color: "white", flexGrow: 1, margin: "0", overflow: "hidden" }}>
                Conducted process audit of GLPI-based IT reporting workflow and engineered automated BI transformation. Built end-to-end ETL pipeline eliminating 100% of manual data entry and cutting reporting production time by 90%. Delivered real-time Power BI dashboards tracking incident volume, ticket resolution metrics, and asset KPIs. Standardized operational performance metrics enabling leadership decision-making and process optimization.
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
            <h1>GET IN TOUCH</h1>
            <p>
              Let's discuss <span className="purple">transformation initiatives</span>
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