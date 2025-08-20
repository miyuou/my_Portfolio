
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard"; // Use the cleaned-up CertificateCard
import Particle from "../Particle";

// Import certificate images
import Cert1 from "../../Assets/JAVAPOO.png";
import Cert2 from "../../Assets/SOFT.png";
import Cert3 from "../../Assets/REACTBASICS-1.png";
import Cert4 from "../../Assets/SOLV-1.png";
import Cert5 from "../../Assets/softw.png";
import Cert6 from "../../Assets/agility.png";
import Cert7 from "../../Assets/pr.png";
import Cert8 from "../../Assets/uni.png";
import Cert9 from "../../Assets/c.png";
import Cert10 from "../../Assets/htm.png";
import Cert11 from "../../Assets/inter.png";
import Cert12 from "../../Assets/sdg.png";
import Cert13 from "../../Assets/afri.png";
import Cert14 from "../../Assets/recher.png";
import Cert15 from "../../Assets/sql.png";
import Cert16 from "../../Assets/docker.png";
import Cert17 from "../../Assets/azure.png";
import Cert18 from "../../Assets/devops.png";
import Cert19 from "../../Assets/cloud.png";
import Cert20 from "../../Assets/softwareeng.png";
import Cert21 from "../../Assets/agile.png";
import Cert22 from "../../Assets/git.png";
import Cert23 from "../../Assets/linux.png";
import Cert24 from "../../Assets/arduino.png";
import Cert25 from "../../Assets/pbi.png";
import Cert26 from "../../Assets/dataharnessing.png";
import Cert27 from "../../Assets/ETL.png";
import Cert28 from "../../Assets/deploy.png";
import Cert29 from "../../Assets/dh.png";
import Cert30 from "../../Assets/dm.png";
import Cert31 from "../../Assets/CDPBI.png";
import Cert32 from "../../Assets/DA.png";
import Cert33 from "../../Assets/PL.png";
import Cert34 from "../../Assets/BI.png";
import Cert35 from "../../Assets/scrum.png";
function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certifications I have earned.
        </p>

       <Row className="g-4"> 
          {/* First certificate card */}
             <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert34}
              title="Google Business Intelligence"
              description="Issued by Coursera | Google"
                certificateLink="https://coursera.org/share/61107f4950c8aab814743b766b3e12c7"
            />
          </Col>
        
            <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert35}
              title="IT Scrum Master Specialization"
              description="Issued by Coursera | IBM"
                certificateLink="https://coursera.org/share/4a96ebfb1bfcd1a34e51d6d6562562f9"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert25}
              title="Microsoft Power BI Data Analyst Professional Certificate"
              description="Issued by Coursera | Microsoft"
                certificateLink="https://coursera.org/share/83289d507352d3052cde8923bb59ac01"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert2}
              title="People and Soft Skills for Professional and Personal Success"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/1d6e4dab39e22f1817366bd86aec4087"
            />
          </Col>
           <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert5}
              title="Software Engineering: Software Design and Project Management"
              description="Issued by Coursera | THE HONG KONG UNIVERSITY OF SCIENCE AND TECHNOLOGY"
                certificateLink="https://coursera.org/share/da67d371bf90c689f73a007869da6b4d"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert4}
              title="Solving Problems with Creative and Critical Thinking"
              description="Issued by Coursera | IBM"
                certificateLink="https://coursera.org/share/87a1b408dd3a44a6f01e7aaa5632a4f1"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert26}
              title="Preparing Data for Analysis with Microsoft Excel"
              description="Issued by Coursera | Microsoft"
              certificateLink="https://coursera.org/share/b1a00f6c036c7b7491901726cd7332f2"
            />
          </Col>
           <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert16}
              title="Introduction to Containers w/ Docker, Kubernetes & OpenShift"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/08a2577ed82d06eeacb84c2ed67ca8b4"
            />
          </Col>
            <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert27}
              title="Extract, Transform and Load Data in Power BI"
              description="Issued by Coursera | Microsoft"
              certificateLink="https://coursera.org/share/d817c3f28d66df615c94501955b9fec6"
            />
          </Col>
            <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert32}
              title="Data Analysis and Visualization with Power BI"
              description="Issued by Coursera | Microsoft"
                certificateLink="https://coursera.org/share/46d3344095853667d41c62741c9764f5"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert29}
              title="Harnessing the Power of Data with Power BI"
              description="Issued by Coursera | Microsoft"
              certificateLink="https://coursera.org/share/3b637d58337d8b6a7e362cb71c03330e"
            />
          </Col>
            <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert30}
              title="Data Modeling in Power BI"
              description="Issued by Coursera | Microsoft"
              certificateLink="https://coursera.org/share/b647fe80a9fc37f0b9539ac91dc7733f"
            />
          </Col>
         <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert17}
              title="Virtual Networks in Azure"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/abf9af8e5faf3ac828d7b9dd78fa0728"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert21}
              title="Introduction to Agile Development and Scrum"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/8882699669ed651db00a5ea3f51aed75"
            />
          </Col>
        
            <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert28}
              title="Deploy and Maintain Power BI Assets and Capstone project"
              description="Issued by Coursera | Microsoft"
              certificateLink="https://coursera.org/share/2b55c891b52daabd1b717548705a29cc"
            />
          </Col>
  <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert31}
              title="Creative Designing in Power BI"
              description="Issued by Coursera | Microsoft"
              certificateLink="https://coursera.org/share/b10c018fcd0b2b541e86062cffd77b4c"
            />
          </Col>
             <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert23}
              title="Hands-on Introduction to Linux Commands and Shell Scripting"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/dabe8f61c1dfa0e293d8627542282a1b"
            />
          </Col>
  <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert18}
              title="Introduction to DevOps"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/72210e25df7549c58238533df5ca2929"
            />
          </Col>
             <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert20}
              title="Introduction to Software Engineering"
              description="Issued by Coursera | IBM"
              certificateLink="  https://coursera.org/share/b13d9d60565dc1b9ab41c34eb999786f"
            />
          </Col>
        
           <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert19}
              title="Introduction to Cloud Computing"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/761808572d6e0f4ae5d315fa9b2a4ab7"
            />
          </Col>
           <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert1}
              title="Java and Object-Oriented Programming"
              description="Issued by Coursera | University Of Pennsylvania"
                certificateLink="https://coursera.org/share/70cb55fd0ed87a3636ae874a8568b1de"
            />
          </Col>
     
     
          {/* First certificate card */}
      

      <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert22}
              title="Getting Started with Git and GitHub"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/18c96756b7ce554199f87f2f817cfac4"
            />
          </Col>
       
          <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert6}
              title="Delivering Quality Work with Agility"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/3a448b36eb362fe36ea280f2585e6a4e"
            />
          </Col>
      <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert7}
              title="Present with Purpose: Create/Deliver Effective Presentations"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/f9e8b3318065e8a2d762d12e8f5378b5"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert33}
              title="Microsoft PL-300 Exam Preparation and Practice"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/0d932e998bd56e138183fe669a7e725c"
            />
          </Col>
           <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert8}
              title="The Unix Workbench"
              description="Issued by Coursera | Johns Hopkins University"
              certificateLink="https://coursera.org/share/f9e8b3318065e8a2d762d12e8f5378b5"
            />
          </Col>
         <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert9}
              title="Introduction à la programmation orientée objet (en C++)"
              description="Issued by Coursera | École Polytechnique Fédérale de Lausanne"
              certificateLink="https://coursera.org/share/44c6a5b0fdf91a26193421ac0cb03c02"
            />
          </Col>
        <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert10}
              title="HTML, CSS, and Javascript for Web Developers"
              description="Issued by Coursera | Johns Hopkins University"
              certificateLink="https://coursera.org/share/0c722c3f650454ad9e4b662c027a1035"
            />
          </Col>
        <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert11}
              title="Developing Interpersonal Skills"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/39beab849a8f797441cace13120f700e"
            />
          </Col>
            <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert12}
              title="Impact Measurement & Management for the SDGs"
              description="Issued by Coursera | Duke University"
              certificateLink="https://coursera.org/share/ed31b9397f733ec35f4b544671a239a1"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert13}
              title="Villes africaines: Environnement et enjeux de développement durable"
              description="Issued by Coursera | École Polytechnique Fédérale de Lausanne"
              certificateLink="https://coursera.org/share/118d641d728ebe0329980312b2c7b4ca"
            />
          </Col>
           <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert14}
              title="La recherche documentaire"
              description="Issued by Coursera | École Polytechnique IP PARIS"
              certificateLink="https://coursera.org/share/4a4ed94d716c6a074e0191e7d919beee"
            />
          </Col>
            <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert15}
              title="The Structured Query Language (SQL)"
              description="Issued by Coursera | University of Colorado Boulder"
              certificateLink="https://coursera.org/share/b4e1e0a3acb619fda985f232bb80f476"
            />
          </Col>
        <Col xs={12} sm={6} md={4}>
            <CertificateCard
              imgPath={Cert24}
              title="The Arduino Platform and C Programming"
              description="Issued by Coursera | University of Califronia,Irvine"
              certificateLink="https://coursera.org/share/5af5866757d35b0f14af882abc0b7339"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;