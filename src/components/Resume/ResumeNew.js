import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfEnglish from "../../Assets/Mirghany_Meryem_CV.pdf";
import pdfFrench from "../../Assets/Meryem_Mirghany_CV.pdf";
import { AiOutlineEye, AiOutlineDownload } from "react-icons/ai";
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

  const handleDownload = (language) => {
    const pdfFile = language === "english" ? pdfEnglish : pdfFrench;
    const fileName = language === "english" ? "CV_Mirghany_English.pdf" : "CV_Mirghany_French.pdf";
    
    // Create a blob and download with clean filename
    fetch(pdfFile)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Download failed:', error);
        // Fallback to direct link method
        const link = document.createElement("a");
        link.href = pdfFile;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
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
            <br />
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => handleDownload("english")}
              style={{ maxWidth: "200px", margin: "5px", fontSize: "0.85rem" }}
            >
              <AiOutlineDownload />
              &nbsp;Download English CV
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
            <br />
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => handleDownload("french")}
              style={{ maxWidth: "200px", margin: "5px", fontSize: "0.85rem" }}
            >
              <AiOutlineDownload />
              &nbsp;Download French CV
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