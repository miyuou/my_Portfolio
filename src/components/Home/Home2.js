import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      
          <Row className="justify-content-center"> {/* Add justify-content-center here */}
      <Col md={8} className="home-about-description text-center">
       
            <h1 style={{ fontSize: "2.6em" }}>
              WELCOME TO MY WORLD: <span className="purple">Where Innovation Meets Engineering</span>
            </h1>
            <p className="home-about-body" style={{ textAlign: "center" }}>
           I'm <span className="purple">Mirghany Meryem</span>, a 5th-year engineering student at{" "}
<span className="purple">EMSI, Casablanca</span>. I'm passionate about{" "}
<span className="purple">technology and data</span>, with a focus on{" "}
<span className="purple">building solutions</span> that help businesses make{" "}
<span className="purple">informed decisions</span>. I enjoy working with{" "}
<span className="purple">data analytics</span>,{" "}
<span className="purple">automation</span>, and exploring how{" "}
<span className="purple">technology</span> can solve real-world problems.
<br />
<br />
I'm constantly learning and growing, and I thrive on tackling new challenges. I believe the best solutions come from{" "}
<span className="purple">collaboration</span> and{" "}
<span className="purple">diverse perspectives</span>. I'm the kind of person who listens intently, learns from others, and applies those insights to create meaningful results.
<br />
<br />
When I'm not coding, I enjoy <span className="purple">reading</span>,{" "}
<span className="purple">writing</span>, and exploring topics like{" "}
<span className="purple">psychology</span> and{" "}
<span className="purple">philosophy</span>. 🧠📚
            </p>
          </Col>
        </Row>

 {/* Education Section */}
<Row className="education-section" style={{ paddingTop: "50px" }}>
  <Col md={12}>
    <h1 className="project-heading">
      My <strong className="purple">Education</strong>
    </h1>
  </Col>
  
  <Col md={6} className="education-card">
    <div className="education-item" style={{ 
      background: "rgba(255, 255, 255, 0)", 
      padding: "20px", 
      borderRadius: "10px", 
      marginBottom: "20px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      minHeight: "280px",
      display: "flex",
      flexDirection: "column"
    }}>
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
          <span className="purple">Focus:</span> Software Engineering (MIAGE)
        </p>
      </div>
      
   
    </div>
  </Col>
  
  <Col md={6} className="education-card">
    <div className="education-item" style={{ 
      background: "rgba(255, 255, 255, 0)", 
      padding: "20px", 
      borderRadius: "10px", 
      marginBottom: "20px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      minHeight: "280px",
      display: "flex",
      flexDirection: "column"
    }}>
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
<Row className="experience-section" style={{ paddingTop: "50px" }}>
  <Col md={12}>
    <h1 className="project-heading">
      My <strong className="purple">Experience</strong>
    </h1>
  </Col>
  
  <Col md={6} className="experience-card">
    <div className="experience-item" style={{ 
      background: "rgba(255, 255, 255, 0)", 
      padding: "20px", 
      borderRadius: "10px", 
      marginBottom: "20px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      minHeight: "280px",
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <MdWork style={{ fontSize: "1.5em", color: "#c770f0", marginRight: "10px" }} />
        <h3 className="purple" style={{ margin: "0", fontSize: "1.2em" }}>Business Intelligence Engineer</h3>
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
          <span className="purple">Tech Stack:</span> Python, Power BI, Jira, Agile Scrum
        </p>
      </div>
      
      <p style={{ fontSize: "0.9em", color: "white", flexGrow: 1, margin: "0" }}>
        Developed POWERGLPI - an automated BI solution that reduced manual reporting. 
        Built ETL pipelines and interactive dashboards for IT performance analysis.
      </p>
    </div>
  </Col>
  
  <Col md={6} className="experience-card">
    <div className="experience-item" style={{ 
      background: "rgba(255, 255, 255, 0)", 
      padding: "20px", 
      borderRadius: "10px", 
      marginBottom: "20px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      minHeight: "280px",
      display: "flex",
      flexDirection: "column"
    }}>
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
      
      <p style={{ fontSize: "0.9em", color: "white", flexGrow: 1, margin: "0" }}>
        Conducted Morocco's 2024 National Census, ensuring data accuracy and integrity. 
        Enhanced communication skills and attention to detail in high-stakes data collection.
      </p>
    </div>
  </Col>
  
  <Col md={6} className="experience-card">
    <div className="experience-item" style={{ 
      background: "rgba(255, 255, 255, 0)", 
      padding: "20px", 
      borderRadius: "10px", 
      marginBottom: "20px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      minHeight: "280px",
      display: "flex",
      flexDirection: "column"
    }}>
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
      
      <p style={{ fontSize: "0.9em", color: "white", flexGrow: 1, margin: "0" }}>
        Observed complete network implementation lifecycle from planning to deployment. 
        Gained insights into project coordination and stakeholder management.
      </p>
    </div>
  </Col>
  
  <Col md={6} className="experience-card">
    <div className="experience-item" style={{ 
      background: "rgba(255, 255, 255, 0)", 
      padding: "20px", 
      borderRadius: "10px", 
      marginBottom: "20px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      minHeight: "280px",
      display: "flex",
      flexDirection: "column"
    }}>
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
      
      <p style={{ fontSize: "0.9em", color: "white", flexGrow: 1, margin: "0" }}>
        Gained exposure to complex data flows in international trade operations. 
        Developed systematic problem-solving skills and cross-functional coordination abilities.
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
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/meryem-mirghany-779437298/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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