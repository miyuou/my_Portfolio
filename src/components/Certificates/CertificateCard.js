import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";

function CertificateCard({ imgPath, title, description, certificateLink }) {
  return (
    <Card 
      className="project-card-view" 
      style={{ 
        height: "100%", 
        display: "flex", 
        flexDirection: "column",
        transition: "transform 0.2s ease-in-out"
      }}
    >
      <Card.Img
        variant="top"
        src={imgPath}
        alt="Certificate"
        style={{ objectFit: "cover", height: "200px", borderRadius: "10px" }}
      />
      <Card.Body 
        className="d-flex flex-column" 
        style={{ flexGrow: 1 }}
      >
        <Card.Title 
          style={{ 
            minHeight: "2.5em", 
            fontSize: "1.1rem",
            lineHeight: "1.2"
          }}
        >
          {title}
        </Card.Title>
        <Card.Text 
          style={{ 
            minHeight: "3em", 
            flexGrow: 1,
            fontSize: "0.9rem",
            lineHeight: "1.3"
          }}
        >
          {description}
        </Card.Text>
        {certificateLink && (
          <div className="mt-auto">
            <Button
              variant="primary"
              href={certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "100%" }}
            >
              View Certificate
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;