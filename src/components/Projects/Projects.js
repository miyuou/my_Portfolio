import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Emsi from "../../Assets/Projects/EMSI.png";
import Collection from "../../Assets/Projects/coll.png";
import Hiber from "../../Assets/Projects/hotel hiber casablanca.png";
import emsiexchange from "../../Assets/Projects/swap.png";
import auction from "../../Assets/Projects/auction.jpeg";
import PowerGLPI from "../../Assets/Projects/pwglpi.jpg";
import ticketManagement from "../../Assets/Projects/ticket.png";
import testingAssistant from "../../Assets/Projects/test.png";
function Projects() {
  const projectsData = [
    {
      imgPath: PowerGLPI,
      title: "PowerGLPI - ITSM Analytics Solution",
      shortDescription: "Business Intelligence Dashboard for ITSM Data",
      description: "PowerGLPI is a comprehensive BI solution that automates extraction, transformation, and visualization of IT ticket data from GLPI. This solution enables IT teams to make informed decisions through real-time KPIs and interactive dashboards. The system automatically processes data to provide insights on performance, trends, and optimization opportunities.",
      technologies: ["Python", "Power BI", "Pandas", "DAX", "ETL"],
      ghLink: "",
      demoLink: "",
      isOngoing: false,
      category: "Business Intelligence",
      features: [
        "Automated GLPI data extraction",
        "Real-time interactive dashboards", 
        "Advanced DAX calculations for business KPIs",
        "ETL pipeline for data processing"
      ]
    },
    {
      imgPath: Emsi,
      title: "EMSI SmartPresence",
      shortDescription: "Student Attendance Management Application",
      description: "Native Android application developed to simplify attendance management at EMSI. The app provides professors with an intuitive interface to mark attendance, view history, and generate reports. Integrated with Firebase for real-time synchronization and secure authentication, ensuring data reliability and service continuity.",
      technologies: ["Android", "Java", "Firebase", "Firebase Auth", "Firestore"],
      ghLink: "https://github.com/miyuou/EMSISMARTPRESENCE",
      demoLink: "",
      isOngoing: false,
      category: "Mobile Development",
      features: [
        "Intuitive professor interface",
        "Secure Firebase authentication",
        "Real-time synchronization",
        "Attendance report generation"
      ]
    },
    {
      imgPath: emsiexchange,
      title: "EmsiExchange",
      shortDescription: "Student Exchange Platform for EMSI",
      description: "Modern web platform enabling EMSI students to exchange, sell, and report lost/found items. Developed with cutting-edge web technologies for optimal user experience, the application offers a responsive interface and advanced search and filtering capabilities. Security and ease of use are at the core of the design.",
      technologies: ["React", "TypeScript", "ShadCN UI", "Supabase", "Tailwind CSS", "Vite"],
      ghLink: "https://github.com/miyuou/emsi-exchange",
      demoLink: "",
      isOngoing: false,
      category: "Web Development",
      features: [
        "Modern responsive interface",
        "Secure exchange system",
        "Lost and found management",
        "User authentication system"
      ]
    },
    {
  imgPath: testingAssistant, // You'll need to add an appropriate image
  title: "AI-Powered Testing Assistant",
  shortDescription: "Intelligent Manual Testing Automation Platform",
  description: "Comprehensive web application that revolutionizes manual testing workflows by automatically generating test cases from .docx specifications using AI. The platform extracts content from developer documentation, leverages OpenAI's GPT models to create structured test cases, and provides an intuitive interface for testers to execute and track results. Features include automated report generation and analytics dashboard for testing insights.",
  technologies: ["Python", "Flask", "React", "OpenAI API", "SQLite", "python-docx", "openpyxl", "Bootstrap", "Axios","Scrum"],
  ghLink: "https://github.com/yourusername/testing-assistant", // Update with your actual repo
  demoLink: "", // Add demo link when available
  isOngoing: true,
  category: "AI & Automation",
  features: [
    "Automated test case generation from .docx files",
    "AI-powered content extraction and analysis",
    "Interactive test execution interface",
    "Automated Excel report generation",
    "Real-time testing progress dashboard",
    "Structured test case management"
  ]
},
    {
      imgPath: auction,
      title: "Smart Auction  Platform",
      shortDescription: "Secure Online Auction Platform",
      description: "Robust online auction platform developed with J2EE, providing a secure environment for real-time bidding. The system handles user authentication, bid validation, and features a comprehensive administrative interface. Enterprise-grade architecture with transaction management and real-time notifications ensures reliability and scalability.",
      technologies: ["J2EE", "JSP", "Servlets", "MySQL", "Apache Tomcat", "Bootstrap", "JavaScript"],
      ghLink: "https://github.com/miyuou/J2EE_project",
      demoLink: "",
      isOngoing: false,
      category: "Enterprise Development",
      features: [
        "Real-time bidding system",
        "Comprehensive admin interface",
        "Automated notifications system",
        "Secure transaction management"
      ]
    },
    {
  imgPath: ticketManagement, // You'll need to add an appropriate image
  title: "Smart Ticket Management System",
  shortDescription: "Enhanced Help Desk Analytics Platform",
  description: "Advanced ticket management system designed for technical support teams, featuring automated data import from Excel files and AI-powered analytics. The platform streamlines ticket workflow from creation to resolution, provides comprehensive statistical analysis with interactive dashboards, and generates professional reports. Built with modern full-stack architecture following agile methodology.",
  technologies: ["Python", "Flask", "React", "SQLAlchemy", "pandas", "Chart.js", "openpyxl", "Axios", "Material-UI"],
  ghLink: "https://github.com/yourusername/ticket-management-system", // Update with your actual repo
  demoLink: "", // Add demo link when available
  isOngoing: true,
  category: "Full-Stack Development",
  features: [
    "Automated Excel data import and processing",
    "Dynamic ticket creation and management",
    "Interactive analytics dashboard with visualizations",
    "Automated performance alerts and notifications",
    "Professional Excel report generation",
    "RESTful API with comprehensive CRUD operations",
    "Responsive React interface with real-time updates"
  ]
},
    {
      imgPath: Hiber,
      title: "Hiber - Hotel Reservation System",
      shortDescription: "Complete Hotel Management Platform",
      description: "HIBER is a comprehensive hotel management system developed with Django, offering an end-to-end solution for online reservations. The platform includes a sophisticated admin panel for managing rooms, rates, and bookings. The modular architecture ensures easy maintenance and optimal scalability for growing business needs.",
      technologies: ["Django", "Python", "MySQL", "Bootstrap", "HTML/CSS", "JavaScript"],
      ghLink: "https://github.com/miyuou/Hiber",
      demoLink: "",
      isOngoing: false,
      category: "Web Development",
      features: [
        "Intuitive online booking system",
        "Complete admin panel",
        "Dynamic availability management",
        "Integrated payment processing"
      ]
    },
    {
      imgPath: Collection,
      title: "Collection Manager Pro",
      shortDescription: "Intelligent Collection Management Tool",
      description: "Sophisticated web application for managing diverse collections, developed with ASP.NET Core and Entity Framework. Offers advanced categorization, search, and statistics features. The modern user interface enables efficient management with sorting, filtering, and data export tools for comprehensive collection oversight.",
      technologies: ["ASP.NET Core", "Entity Framework", "C#", "SQL Server", "Bootstrap"],
      ghLink: "https://github.com/miyuou/CollectionManager",
      demoLink: "",
      isOngoing: false,
      category: "Desktop/Web Application",
      features: [
        "Multi-collection management",
        "Advanced search and filtering",
        "Statistics and analytics",
        "Multiple format data export"
      ]
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Recent Projects</strong>
        </h1>
        <p style={{ color: "white", fontSize: "1.1em", marginBottom: "2rem" }}>
          Discover a selection of my most recent projects, showcasing my mastery 
          of various technologies and solution-oriented approach.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                shortDescription={project.shortDescription}
                description={project.description}
                technologies={project.technologies}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                isOngoing={project.isOngoing}
                category={project.category}
                features={project.features}
              />
            </Col>
          ))}
        </Row>
        
        {/* CTA Section */}
        <Row className="justify-content-center" style={{ marginTop: "3rem" }}>
          <Col md={8} className="text-center">
            <h3 style={{ color: "white", marginBottom: "1rem" }}>
              Interested in Collaboration?
            </h3>
            <p style={{ color: "white", fontSize: "1.1em" }}>
              I'm always open to new challenges and innovative projects. 
              Feel free to contact me to discuss your ideas!
       
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

