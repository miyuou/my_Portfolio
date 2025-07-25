import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Emsi from "../../Assets/Projects/EMSI.png";
import Collection from "../../Assets/Projects/coll.png";
import Hiber from "../../Assets/Projects/hotel hiber casablanca.png";
import emsiexchange from "../../Assets/Projects/STICKER LOGO.png";
import auction from "../../Assets/Projects/auction.jpeg";
import PowerGLPI from "../../Assets/Projects/pwglpi.jpg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
            <Col md={4} className="project-card">
  <ProjectCard
    imgPath={PowerGLPI} // Make sure you import your PowerGLPI logo/image
    title="PowerGLPI - ITSM Data Analytics Solution"
    shortDescription="Business Intelligence Dashboard for ITSM Data"
    description="PowerGLPI is a BI solution that automates the extraction, transformation, and visualization of IT ticket data from GLPI. Built with Python and Power BI, it features real-time KPIs and interactive dashboards for smarter IT decision-making.Technologies used: Python (ETL, Pandas), Power BI (modeling, DAX, visualization), GLPI REST API (secure integration)."
    ghLink="" 
    isOngoing={true}
  />
</Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Emsi}
              title="EMSI SmartPresence"
              shortDescription="Student Attendance Management Application for the Institution"
              description=" The project involves developing a user-friendly Android app for EMSI professors to manage student attendance efficiently. It integrates **Firebase** for **authentication** and **data management**, ensuring secure access and real-time updates. Built for Android, it simplifies attendance tracking and provides a seamless experience for professors."
              ghLink="https://github.com/miyuou/EMSISMARTPRESENCE"
              isOngoing={true}
          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emsiexchange}
              title="EmsiExchange"
              shortDescription="EMSI Exchange Hub – Swap, Sell & Find Lost Items."
              description="A fast, student-focused web app built with React, TypeScript, ShadCN UI, and Supabase, enabling EMSI students to exchange items and report lost & found belongings with ease."
              ghLink="https://github.com/miyuou/emsi-exchange"
              isOngoing={true}
             
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auction}
              title="Online Auction System"
              shortDescription="SmartAuction – Online Bidding System."
              description="A secure and dynamic online auction platform built with J2EE, enabling users to list, bid, and win items in real time with user-friendly interfaces and reliable backend processing."
              ghLink="https://github.com/miyuou/J2EE_project"
              isOngoing={true}
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hiber}
              title="Hiber"
              shortDescription="Hotel Reservation Management System."
              description="HIBER is a web-based hotel reservation system developed with **Django** and **MySQL**. It enables clients to book rooms online and provides administrators with a dashboard to manage room availability and reservations, enhancing efficiency and user experience."
              ghLink="https://github.com/miyuou/Hiber"
              isOngoing={false}
             
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Collection}
              title="Collection Manager"
              shortDescription="An efficient tool to manage collections."
              description="Collection Manager allows you to efficiently manage and track various collections. Developed with ASP.NET CORE (Entity Framework) with its user-friendly interface, users can add, edit, and remove items from their collection with ease."
              ghLink="https://github.com/miyuou/CollectionManager"
              isOngoing={false}
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
