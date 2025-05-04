
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

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* First certificate card */}
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert5}
              title="Software Engineering: Software Design and Project Management"
              description="Issued by Coursera | THE HONG KONG UNIVERSITY OF SCIENCE AND TECHNOLOGY"
                certificateLink="https://coursera.org/share/da67d371bf90c689f73a007869da6b4d"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert2}
              title="People and Soft Skills for Professional and Personal Success"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/1d6e4dab39e22f1817366bd86aec4087"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert4}
              title="Solving Problems with Creative and Critical Thinking"
              description="Issued by Coursera | IBM"
                certificateLink="https://coursera.org/share/87a1b408dd3a44a6f01e7aaa5632a4f1"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert16}
              title="Introduction to Containers w/ Docker, Kubernetes & OpenShift"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/08a2577ed82d06eeacb84c2ed67ca8b4"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert17}
              title="Virtual Networks in Azure"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/abf9af8e5faf3ac828d7b9dd78fa0728"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert18}
              title="Introduction to DevOps"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/72210e25df7549c58238533df5ca2929"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert19}
              title="Introduction to Cloud Computing"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/761808572d6e0f4ae5d315fa9b2a4ab7"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert1}
              title="Java and Object-Oriented Programming"
              description="Issued by Coursera | University Of Pennsylvania"
                certificateLink="https://coursera.org/share/70cb55fd0ed87a3636ae874a8568b1de"
            />
          </Col>
     
     
          {/* First certificate card */}
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert3}
              title="React Basics"
              description="Issued by Coursera | Meta"
                certificateLink="https://coursera.org/share/c3e41af472fe6645bae1e252a9b89d55"
            />
          </Col>

         
       
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert6}
              title="Delivering Quality Work with Agility"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/3a448b36eb362fe36ea280f2585e6a4e"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert7}
              title="Present with Purpose: Create/Deliver Effective Presentations"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/f9e8b3318065e8a2d762d12e8f5378b5"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert8}
              title="The Unix Workbench"
              description="Issued by Coursera | Johns Hopkins University"
              certificateLink="https://coursera.org/share/f9e8b3318065e8a2d762d12e8f5378b5"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert9}
              title="Introduction à la programmation orientée objet (en C++)"
              description="Issued by Coursera | École Polytechnique Fédérale de Lausanne"
              certificateLink="https://coursera.org/share/44c6a5b0fdf91a26193421ac0cb03c02"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert10}
              title="HTML, CSS, and Javascript for Web Developers"
              description="Issued by Coursera | Johns Hopkins University"
              certificateLink="https://coursera.org/share/0c722c3f650454ad9e4b662c027a1035"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert11}
              title="Developing Interpersonal Skills"
              description="Issued by Coursera | IBM"
              certificateLink="https://coursera.org/share/39beab849a8f797441cace13120f700e"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert12}
              title="Impact Measurement & Management for the SDGs"
              description="Issued by Coursera | Duke University"
              certificateLink="https://coursera.org/share/ed31b9397f733ec35f4b544671a239a1"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert13}
              title="Villes africaines: Environnement et enjeux de développement durable"
              description="Issued by Coursera | École Polytechnique Fédérale de Lausanne"
              certificateLink="https://coursera.org/share/118d641d728ebe0329980312b2c7b4ca"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert14}
              title="La recherche documentaire"
              description="Issued by Coursera | École Polytechnique IP PARIS"
              certificateLink="https://coursera.org/share/4a4ed94d716c6a074e0191e7d919beee"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cert15}
              title="The Structured Query Language (SQL)"
              description="Issued by Coursera | University of Colorado Boulder"
              certificateLink="https://coursera.org/share/b4e1e0a3acb619fda985f232bb80f476"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;