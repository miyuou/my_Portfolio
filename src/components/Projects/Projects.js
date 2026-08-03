import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import DeloitteBanner from "../../Assets/Projects/Logo_Deloitte.jpeg";
import PowerGLPI from "../../Assets/Projects/pwglpi.jpg";
import CareerMatchAI from "../../Assets/Projects/cr.png";
import Emsi from "../../Assets/Projects/EMSI.png";
import FloralRecognition from "../../Assets/Projects/flower_wallpaper.jpg";
import Change from "../../Assets/Projects/Change.png";
import EM from "../../Assets/Projects/EM.png";

import Collection from "../../Assets/Projects/coll.png";
import Hiber from "../../Assets/Projects/hotel hiber casablanca.png";
import emsiexchange from "../../Assets/Projects/swap.png";
import auction from "../../Assets/Projects/auction.jpeg";

import ticketManagement from "../../Assets/Projects/ticket.png";
import testingAssistant from "../../Assets/Projects/test.png";

function Projects() {
const projectsData = [
  // 1. Deloitte
  {
    imgPath: DeloitteBanner,
    title: "Payroll Automation & Data Governance - Deloitte",
    shortDescription:
      "Digital Transformation · HR Process Optimization · Data Governance",
    description:
      "Designed and deployed an end-to-end HR transformation solution automating salary review workflows across 30+ organizational units. Combined business analysis, workflow automation, governance, RBAC security, and Power BI dashboards to reduce processing time from 3 hours to under 5 minutes while improving decision-making and process standardization.",
    technologies: [
      "Python",
      "Django",
      "Power BI",
      "RBAC",
      "Data Governance",
      "Agile Scrum"
    ],
    ghLink: "",
    demoLink: "",
    isOngoing: false,
    category: "Digital Transformation",
    features: [
      "Business process analysis",
      "Workflow automation",
      "RBAC & governance",
      "Power BI dashboards",
      "30+ organizational units",
      "3h → <5 min processing time"
    ]
  },

  // 2. Auto Hall
  {
    imgPath: PowerGLPI,
    title: "IT Operations Analytics & Process Automation - Auto Hall",
    shortDescription:
      "Business Intelligence · Process Automation · Decision Support",
    description:
      "Developed an automated reporting solution for IT operations by integrating GLPI data into an ETL pipeline and Power BI dashboards. Eliminated manual reporting, standardized operational KPIs, and reduced reporting time by 90%.",
    technologies: [
      "Python",
      "SQL",
      "Power BI",
      "ETL",
      "GLPI",
      "Agile Scrum"
    ],
    ghLink: "",
    demoLink: "",
    isOngoing: false,
    category: "Business Intelligence",
    features: [
      "ETL pipeline",
      "Power BI reporting",
      "90% time reduction",
      "Operational KPIs",
      "Process automation",
      "Agile delivery"
    ]
  },

  // 3. CareerMatch AI
  {
    imgPath: CareerMatchAI,
    title: "CareerMatch AI - Talent Matching Platform",
    shortDescription:
      "ML-powered career prediction and talent matching",
    description:
      "CareerMatch AI is an intelligent platform leveraging machine learning algorithms to match talents with opportunities and predict career trajectories. The system analyzes skills, profiles, and market trends to provide personalized recommendations through interactive analytics and visualizations.",
    technologies: [
      "React",
      "Python",
      "scikit-learn",
      "FastAPI"
    ],
    ghLink: "https://github.com/miyuou/CareerMatch_AI",
    demoLink: "",
    isOngoing: false,
    category: "Machine Learning",
    features: [
      "ML-based talent matching",
      "Career prediction",
      "Analytics dashboard",
      "REST API",
      "Interactive visualizations"
    ]
  },

  // 4. Floral Recognition
  {
    imgPath: FloralRecognition,
    title: "Floral Recognition - Deep Learning System",
    shortDescription:
      "Computer Vision · CNN · Mobile AI",
    description:
      "Developed an end-to-end deep learning solution for flower recognition using convolutional neural networks. The project includes data preprocessing, model training, computer vision techniques, and deployment within a Flutter mobile application.",
    technologies: [
      "TensorFlow",
      "OpenCV",
      "Flutter",
      "Python",
      "CNN",
      "ANN"
    ],
    ghLink: "https://github.com/miyuou/Flutter_App",
    demoLink: "",
    isOngoing: false,
    category: "Deep Learning",
    features: [
      "CNN & ANN models",
      "Computer vision",
      "Mobile deployment",
      "Image preprocessing",
      "Real-time recognition"
    ]
  },

  // 5. Change Readiness
  {
    imgPath: Change,
    title: "Change Readiness Assessment Platform",
    shortDescription:
      "AI for Transformation · Change Analytics",
    description:
      "Designed an AI-assisted diagnostic platform evaluating organizational readiness across leadership, culture, data maturity, technology, and adoption. Uses NLP to identify resistance patterns and support transformation initiatives.",
    technologies: [
      "Python",
      "NLP",
      "scikit-learn",
      "Power BI",
      "AI"
    ],
    ghLink: "",
    demoLink: "",
    isOngoing: true,
    category: "AI for Business",
    features: [
      "Readiness scoring",
      "NLP analysis",
      "Change diagnostics",
      "Radar dashboards",
      "Transformation recommendations"
    ]
  },

 

 

  {
  imgPath: EM,
  title: "Internship Management Process ",
  shortDescription:
    "Business Analysis · Process Improvement · BPMN",

  description:
    "Analyzed the internship agreement management process at EMSI by documenting stakeholder interactions, identifying operational bottlenecks, and proposing an optimized digital workflow. Produced AS-IS and TO-BE process models to improve efficiency, traceability, and coordination.",

  technologies: [
    "Business Analysis",
    "BPMN 2.0",
    "Bizagi",
    "Process Mapping"
  ],

  ghLink: "",
  demoLink: "",
  isOngoing: false,
  category: "Academic Project",

  features: [
    "Stakeholder analysis",
    "AS-IS process mapping",
    "TO-BE workflow design",
    "BPMN modeling",
    "Process improvement"
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
  ghLink: "https://github.com/miyuou/SmartQA.git", // Update with your actual repo
  demoLink: "", // Add demo link when available
  isOngoing: false,
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
  ghLink: "https://github.com/miyuou/smartticket.git", // Update with your actual repo
  demoLink: "", // Add demo link when available
  isOngoing: false,
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
          Transformation <strong className="purple">Initiatives</strong>
        </h1>
        <p style={{ color: "white", fontSize: "1.1em", marginBottom: "2rem" }}>
          End-to-end business transformation and process optimization projects, 
          bridging organizational challenges with data-driven and automated solutions.
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
              Driving Organizational Transformation
            </h3>
            <p style={{ color: "white", fontSize: "1.1em" }}>
              Looking to optimize processes, automate workflows, or scale digital initiatives? 
              Let's discuss how to bridge your business challenges with data-driven solutions.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;