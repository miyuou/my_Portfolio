import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge"; // For Ongoing label

function ProjectCard({
  imgPath,
  title,
  description,
  shortDescription, // Add shortDescription prop
  ghLink,
  isOngoing // Add isOngoing prop for ongoing label
}) {
  return (
    <Card className="project-card-view">
      <Card.Img 
        variant="top" 
        src={imgPath} 
        alt="card-img" 
        className="img-fluid" // Ensures images are responsive and same size
        style={{ height: '200px', objectFit: 'cover' }} // Optional to make images a consistent size
      />
      <Card.Body className="d-flex flex-column"> {/* Add flexbox to Card.Body */}
        <Card.Title>{title}</Card.Title>
        
        {/* Short Description */}
        {shortDescription && (
          <Card.Subtitle className="mb-2 text-muted">
            {shortDescription}
          </Card.Subtitle>
        )}
        
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        
        {/* Ongoing label */}
        {isOngoing && (
          <Badge pill bg="warning" text="dark">
            Ongoing
          </Badge>
        )}

        <div className="mt-auto"> {/* Use mt-auto to push the button to the bottom */}
          {ghLink && (
            <Button variant="primary" href={ghLink} target="_blank">
              GitHub
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard; 