import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";

function CertificateCard({ imgPath, title, description, certificateLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgPath}
        alt="Certificate"
        style={{ objectFit: "cover", height: "200px", borderRadius: "10px" }}
      />
      <Card.Body className="d-flex flex-column"> {/* Add flexbox to Card.Body */}
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {certificateLink && (
          <div className="mt-auto"> {/* Use mt-auto to push the button to the bottom */}
            <Button
              variant="primary"
              href={certificateLink}
              target="_blank"
              rel="noopener noreferrer"
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