import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfEnglish from "../../Assets/CV.pdf";
import pdfFrench from "../../Assets/CV meryem mirghany.pdf";
import { AiOutlineEye } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [selectedResume, setSelectedResume] = useState("english");

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleResumeChange = (language) => {
    setSelectedResume(language);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={6} className="text-center">
            <Button
              variant={selectedResume === "english" ? "primary" : "secondary"}
              onClick={() => handleResumeChange("english")}
              style={{ maxWidth: "250px", margin: "10px" }}
            >
              <AiOutlineEye />
              &nbsp;View English CV
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <Button
              variant={selectedResume === "french" ? "primary" : "secondary"}
              onClick={() => handleResumeChange("french")}
              style={{ maxWidth: "250px", margin: "10px" }}
            >
              <AiOutlineEye />
              &nbsp;View French CV
            </Button>
          </Col>
        </Row>

        <Row className="resume">
          <Document
            file={selectedResume === "english" ? pdfEnglish : pdfFrench}
            className="d-flex justify-content-center"
          >
            <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
